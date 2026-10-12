import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xov8_pfym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.91 5.13a2.25 2.25 0 1 1 3.34 2.8a2.25 2.25 0 0 1-.92 4.29a2.5 2.5 0 0 1-3.89 3.01a1.9 1.9 0 0 1-3.39 1.21a1.5 1.5 0 0 1-2.1-1.76a1.9 1.9 0 0 1 .61-3.54a2.5 2.5 0 0 1 2.29-4.35a2.25 2.25 0 0 1 4.06-1.66ZM8.59 16.05l7.55-9m-7.55 9L5.7 19.5");
}
</style><path class="xov8_pfym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:autumn-leaf-sharp"} {...others} />);
}

export default Component;
