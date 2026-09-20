import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o-iqvqb3l {
  fill: currentColor;
  d: path("M4.5 20.5v-17h1v2h3v-2h7v2h3v-2h1v17h-1v-2h-3v2h-7v-2h-3v2zm1-3h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm10 8h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm-6 10h5v-15h-5zm0-15h5z");
}
</style><path class="o-iqvqb3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:theaters-outline"} {...others} />);
}

export default Component;
