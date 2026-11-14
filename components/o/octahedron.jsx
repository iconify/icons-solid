import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y0g-1knlr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m12.736 2.656l-1.341 9.833l8.414-2.214q.153-.041.309-.016q-.192-.432-.589-.853L13.82 3.34q-.473-.502-1.084-.684M9.885 12.46l1.335-9.79q-.584.186-1.04.67L4.471 9.406q-.397.421-.589.853q.199-.031.387.041zm-.045 1.59l1.298 6.923q-.658-.231-1.127-.845l-5.709-7.493q-.348-.458-.495-.906zm2.835 6.98l-1.309-6.982l8.825-2.323l.004-.001q-.147.45-.497.91l-5.709 7.494q-.534.7-1.314.902");
}
</style><path class="y0g-1knlr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:octahedron"} {...others} />);
}

export default Component;
