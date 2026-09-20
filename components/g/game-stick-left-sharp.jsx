import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c982v1boz {
  fill: currentColor;
  d: path("M17 15.35V20H7v-4.65q-2.275-.8-3.637-2.187T2 10.075q0-2.525 2.913-4.3T12 4t7.088 1.775t2.912 4.3q0 1.7-1.362 3.088T17 15.35m-6.225-2.85H14v-.9h-2.225V7.5h-1z");
}
</style><path class="c982v1boz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:game-stick-left-sharp"} {...others} />);
}

export default Component;
