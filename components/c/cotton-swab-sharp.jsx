import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lvwniohca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8 8l8 8M7.75 7.75a2.9 1.75 45 1 0-4.1-4.1a2.9 1.75 45 1 0 4.1 4.1Zm12.6 12.6a2.9 1.75 45 1 0-4.1-4.1a2.9 1.75 45 1 0 4.1 4.1Z");
}
</style><path class="lvwniohca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cotton-swab-sharp"} {...others} />);
}

export default Component;
