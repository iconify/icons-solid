import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h9n0g34le {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5H5zm0 0V5zm4.5-2.5h5v-9h-5zm1-1v-7h3v7z");
}
</style><path class="h9n0g34le"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:looks-0-outline-sharp"} {...others} />);
}

export default Component;
