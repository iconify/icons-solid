import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.rh5n8ubxk {
  fill: currentColor;
  d: path("M48 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0m176 80h-72V56a8 8 0 0 0-13.66-5.66l-72 72a8 8 0 0 0 0 11.32l72 72A8 8 0 0 0 152 200v-64h72a8 8 0 0 0 0-16");
}
</style><path class="rh5n8ubxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-line-left-fill"} {...others} />);
}

export default Component;
