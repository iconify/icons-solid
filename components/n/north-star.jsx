import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fsxv44btx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.16 3.33l1.68 6.09q.16.58.72.79l4.13 1.58q.56.21 0 .42l-4.13 1.58q-.56.21-.72.79l-1.68 6.09q-.16.58-.32 0l-1.68-6.09q-.16-.58-.72-.79l-4.13-1.58q-.56-.21 0-.42l4.13-1.58q.56-.21.72-.79l1.68-6.09q.16-.58.32 0M16 8l1.5-1.5M8 8L6.5 6.5M16 16l1.5 1.5M8 16l-1.5 1.5");
}
</style><path class="fsxv44btx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:north-star"} {...others} />);
}

export default Component;
