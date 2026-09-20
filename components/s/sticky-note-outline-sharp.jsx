import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hvja534ew {
  fill: currentColor;
  d: path("M15.577 20H4V4h16v11.577zM15 19v-4h4V5H5v14zm-3.5-3.5h1v-6h3v-1h-7v1h3zM5 19V5z");
}
</style><path class="hvja534ew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sticky-note-outline-sharp"} {...others} />);
}

export default Component;
