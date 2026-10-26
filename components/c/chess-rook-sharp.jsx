import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i-ykrtbha {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 2L7 2L7 5L11 5L11 2L13 2L13 5L17 5L17 2L19 2L19 7L16.5 10L17.5 17L20 18L20 22L4 22L4 18L6.5 17L7.5 10L5 7ZM7.5 10L16.5 10M6.5 17L17.5 17");
}
</style><path class="i-ykrtbha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chess-rook-sharp"} {...others} />);
}

export default Component;
