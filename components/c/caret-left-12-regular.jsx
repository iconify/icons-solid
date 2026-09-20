import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.bu85sv3ic {
  fill: currentColor;
  d: path("M8 3.994c0-.887-1.07-1.334-1.7-.712L4.26 5.288a1 1 0 0 0 0 1.425L6.3 8.719c.63.621 1.7.174 1.7-.713zM4.963 6L7 3.994v4.012z");
}
</style><path class="bu85sv3ic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:caret-left-12-regular"} {...others} />);
}

export default Component;
