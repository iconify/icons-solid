import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vm6ikpl5w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5V11m0 0Q7 4.5 2.75 8.5M12 11q-6-1.5-8.5 4.5M12 11q5-6.5 9.25-2.5M12 11q6-1.5 8.5 4.5M12 11q-1-4.5.5-8");
}
</style><path class="vm6ikpl5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:leaf-palm"} {...others} />);
}

export default Component;
