import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.x9mx-2-nx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 14.926V9.5a4 4 0 0 1 4-4h5.271m0 37H9.5a4 4 0 0 1-4-4v-5.426m37 0V38.5a4 4 0 0 1-4 4h-5.271m0-37H38.5a4 4 0 0 1 4 4v5.426m-29.928 1.359h23.253M12.572 23.91H26.33m-13.758 7.625H26.33m4.752 0h4.743");
}
</style><path class="x9mx-2-nx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:steuer-scan"} {...others} />);
}

export default Component;
