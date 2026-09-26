import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w6fqr2b3v {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.0158 9.9989L14.088 22L16.9324 16.7288L22 14.2735L10.0158 9.9989ZM6 11L6 10C6 7.7909 7.7909 6 10 6L11 6M2 11L2 10C2 5.5817 5.5817 2 10 2L11 2");
}
</style><path class="w6fqr2b3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cursor-signal-sharp"} {...others} />);
}

export default Component;
