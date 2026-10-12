import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t9nnbc8ar {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.55 17.25h8.9q.8 0 .53-.75l-2.46-7q-.27-.75.28-1.33l3.15-3.34q.55-.58-.22-.38L12.52 5.8q-.77.2-1.09.93l-4.36 9.79q-.32.73.48.73m.53-3h8.11m-13.44 3h18.5");
}
</style><path class="t9nnbc8ar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:witch-hat"} {...others} />);
}

export default Component;
