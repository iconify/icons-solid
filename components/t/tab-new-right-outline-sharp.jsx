import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v1zlbmbpd {
  fill: currentColor;
  d: path("M5 19V5zm-1 1V4h16v9.427q-.238-.06-.488-.09t-.512-.03V5H5v14h8.308q0 .263.03.513t.089.487zm15 2.289l-.688-.689l2.055-2.1H15.5v-1h4.867l-2.056-2.1l.689-.688L22.288 19zM11.5 16.5h1v-4h4v-1h-4v-4h-1v4h-4v1h4z");
}
</style><path class="v1zlbmbpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tab-new-right-outline-sharp"} {...others} />);
}

export default Component;
