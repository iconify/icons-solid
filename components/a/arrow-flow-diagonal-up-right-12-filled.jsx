import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.djxl3zllx {
  fill: currentColor;
  d: path("M6 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V2.707L5.586 7.121a2.5 2.5 0 1 1-.707-.707L9.293 2H6.5a.5.5 0 0 1-.5-.5");
}
</style><path class="djxl3zllx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-flow-diagonal-up-right-12-filled"} {...others} />);
}

export default Component;
