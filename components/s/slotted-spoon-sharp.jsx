import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xfiqin2ja {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.36 19.64a5.5 3.75-45 1 1 7.78-7.78a5.5 3.75-45 1 1-7.78 7.78Zm3.53-1.77l2.48-2.48m-4.24.72l2.48-2.48m3.53-1.77l8.61-8.61");
}
</style><path class="xfiqin2ja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:slotted-spoon-sharp"} {...others} />);
}

export default Component;
