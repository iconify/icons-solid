import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.waldqcb5w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 17a7.5 7.5 0 0 1 15 0m-17 3h19M12 7.5v2m6.53-5.405l.348.554a1.5 1.5 0 0 0 .473.473l.554.348a.626.626 0 0 1 0 1.06l-.554.348a1.5 1.5 0 0 0-.473.473l-.348.554a.626.626 0 0 1-1.06 0l-.348-.554a1.5 1.5 0 0 0-.473-.473l-.554-.348a.626.626 0 0 1 0-1.06l.554-.348a1.5 1.5 0 0 0 .473-.473l.348-.554a.626.626 0 0 1 1.06 0");
}
</style><path class="waldqcb5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:scene-dinner"} {...others} />);
}

export default Component;
