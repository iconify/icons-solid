import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wdjadx5fx {
  fill: currentColor;
  d: path("m9.15 15.539l2.85-2.85l2.85 2.85l.688-.689l-2.85-2.85l2.85-2.85l-.688-.689l-2.85 2.85l-2.85-2.85l-.689.689l2.85 2.85l-2.85 2.85zM5 19V5zm-1 1V4h16v9.427q-.244-.06-.494-.09t-.506-.03V5H5v14h8.308q0 .256.03.506t.089.494zm15 2.289l-.688-.689l2.055-2.1H15.5v-1h4.867l-2.056-2.1l.689-.688L22.288 19z");
}
</style><path class="wdjadx5fx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tab-close-right-outline-sharp"} {...others} />);
}

export default Component;
