import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ng8lunuem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 2H15C15.5523 2 16 2.4477 16 3C16 5 15 5 15 6.5C15 8.5 17 9 17 11C17 14 14.5 16 12 16C9.5 16 7 14 7 11C7 9 9 8.5 9 6.5C9 5 8 5 8 3C8 2.4477 8.4477 2 9 2ZM9 6.5H15M12 16V22M8 22H16");
}
</style><path class="ng8lunuem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cocktail-tropical"} {...others} />);
}

export default Component;
