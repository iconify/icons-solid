import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yfd_xbbyp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.72 3.77l7.81 10.96q.72 1.02-.29 1.76l-5.48 4.02q-1.01.74-2.16.24L3.9 17q-1.15-.5-.45-1.54L11.3 3.79q.7-1.04 1.42-.02m-.42 2.48l1.45 15");
}
</style><path class="yfd_xbbyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tetrahedron"} {...others} />);
}

export default Component;
