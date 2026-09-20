import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fx_mvdvmo {
  fill: currentColor;
  d: path("M2 20V4h20v16Zm12-4v-2h4v2Zm0-3v-2h4v2ZM4 11v7h16v-8h-6V8h6V6h-8v5Z");
}
</style><path class="fx_mvdvmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:screencast-sharp"} {...others} />);
}

export default Component;
