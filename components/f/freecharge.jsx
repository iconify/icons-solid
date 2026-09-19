import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gz5db477h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.384 43l-9.141-15.81l-18.631-4.986L41.388 5l-1.345 8.218l-12.481 6.128l2.03 3.513l9.41-4.86l-1.3 8.088l-4.583 2.223l2.86 4.947Z");
}
</style><path class="gz5db477h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:freecharge"} {...others} />);
}

export default Component;
