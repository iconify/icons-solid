import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sn4-_1buu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 5C2 4.4477 2.4477 4 3 4L7 4C7.5523 4 8 4.4477 8 5L8 9C8 9.5523 7.5523 10 7 10L3 10C2.4477 10 2 9.5523 2 9L2 5ZM2 18L4 20L8 16M12 7L22 7M12 18L22 18");
}
</style><path class="sn4-_1buu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-todo"} {...others} />);
}

export default Component;
