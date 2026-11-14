import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l3g8wyb1f {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.414 4.25h7.985q1.716 0 2.727 1.387t.486 3.02l-2.812 8.75q-.753 2.344-3.214 2.343H6.601q-1.716 0-2.727-1.387t-.486-3.02L6.2 6.593q.753-2.344 3.214-2.343");
}
</style><path class="l3g8wyb1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:parallelogram"} {...others} />);
}

export default Component;
