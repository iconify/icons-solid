import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.d3zn7itgw {
  fill: currentColor;
  d: path("M23.25 14a.75.75 0 0 1-.75-.75V6.56L12.02 17.042A4.5 4.5 0 1 1 11 15.938L21.439 5.5H14.75a.75.75 0 0 1 0-1.5h8.5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-.75.75m-15 8.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6");
}
</style><path class="d3zn7itgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-flow-diagonal-up-right-28-regular"} {...others} />);
}

export default Component;
