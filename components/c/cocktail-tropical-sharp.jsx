import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m4pd8nbky {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.792 2L16.208 2C15.9157 3.5275 15.512 5.0315 15 6.5C15 8.5 17 9 17 11C17 14 14.5 16 12 16C9.5 16 7 14 7 11C7 9 9 8.5 9 6.5C8.488 5.0315 8.0843 3.5275 7.792 2ZM9 6.5L15 6.5M12 16L12 22M7 22L8 22L16 22L17 22");
}
</style><path class="m4pd8nbky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cocktail-tropical-sharp"} {...others} />);
}

export default Component;
