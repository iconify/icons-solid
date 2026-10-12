import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wtluvccns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.5 10.5l4 4l-2 2Q8 19 3.75 20.25Q5 16 7.5 12.5Zm.53-.53l1.44-1.44L12 8l.53.53l2.94 2.94l.53.53l-.53.53l-1.44 1.44l-.53.53l-.53-.53l-2.94-2.94l-.53-.53zM14 10l6.75-6.75m-14.5-.5Q6.64 5.61 9.5 6q-2.86.39-3.25 3.25Q5.86 6.39 3 6q2.86-.39 3.25-3.25Z");
}
</style><path class="wtluvccns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:retouch-brush-sharp"} {...others} />);
}

export default Component;
