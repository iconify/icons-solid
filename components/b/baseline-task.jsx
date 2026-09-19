import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.opkllbtub {
  fill: currentColor;
  d: path("M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm-3.06 16L7.4 14.46l1.41-1.41l2.12 2.12l4.24-4.24l1.41 1.41zM13 9V3.5L18.5 9z");
}
</style><path class="opkllbtub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-task"} {...others} />);
}

export default Component;
