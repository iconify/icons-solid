import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.whs646bfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 18.5L14.75 5a1.75 1.75 0 0 1 2.75 2m0 0c-.75 1.25-1 1-2 2c-.75 1.25 0 1.75-.75 3c-1 1.25-1.75.75-2.5 2c-1 1.25-.25 1.75-1 3c-1 1.25-1.5 1-2.5 2.25l-.25 1.5");
}
</style><path class="whs646bfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hairpin-sharp"} {...others} />);
}

export default Component;
