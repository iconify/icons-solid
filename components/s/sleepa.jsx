import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xtsrj-edz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.18 34.32A21.493 21.493 0 0 1 15.454 4.275a21.498 21.498 0 1 0 28.271 28.27a21.4 21.4 0 0 1-8.545 1.775");
}
</style><path class="xtsrj-edz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:sleepa"} {...others} />);
}

export default Component;
