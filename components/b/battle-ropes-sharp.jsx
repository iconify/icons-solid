import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sqxwc0bys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.5q2.25-3 4.5 0c2.25 3 3 2 4.5 0s3-2 4.5 0c1.25 1.6 3 3.6 4.75 4.5M2.75 16.5q2.25 3 4.5 0c2.25-3 3-2 4.5 0s3 2 4.5 0c1.25-1.6 3-3.6 4.75-4.5m.25-6.5v13");
}
</style><path class="sqxwc0bys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:battle-ropes-sharp"} {...others} />);
}

export default Component;
