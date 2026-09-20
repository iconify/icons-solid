import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dk47f8b-v {
  fill: currentColor;
  d: path("M11.15 15h3.35q.625 0 1.063.438T16 16.5t-.437 1.063T14.5 18H7q-.425 0-.712-.288T6 17V9.5q0-.625.438-1.062T7.5 8t1.063.438T9 9.5v3.25l5.7-5.7q.45-.45 1.1-.45t1.1.45t.45 1.1t-.45 1.1z");
}
</style><path class="dk47f8b-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:transit-enterexit-rounded"} {...others} />);
}

export default Component;
