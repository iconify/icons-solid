import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.au-_4ge1w {
  fill: currentColor;
  d: path("M5 16q0-1.25.875-2.125l8-8Q14.75 5 16 5t2.125.875T19 8t-.875 2.125l-8 8Q9.25 19 8 19t-2.125-.875T5 16");
}
</style><path class="au-_4ge1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pen-size-5"} {...others} />);
}

export default Component;
