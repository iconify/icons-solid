import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n3lca2bsv {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 14L6 3M9.2929 6.2929L6 3L2.7071 6.2929M10 18L21 18M17.7071 21.2929L21 18L17.7071 14.7071M15 3L19 3M21 5L21 9M19 11L15 11M13 5L13 9");
}
</style><path class="n3lca2bsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:expand-dashed-up-right-box-sharp"} {...others} />);
}

export default Component;
