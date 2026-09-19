import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ezfw9-p_o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m6.068 42.5l13.012-37l11.695 36.551M12.926 22.998l20.272-8.914m-8.271 9.692l17.005-7.957");
}
</style><path class="ezfw9-p_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:apni-kaksha"} {...others} />);
}

export default Component;
