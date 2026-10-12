import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e7r7jzbxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.14 16.04l1.72-8.58l.39-1.96h13.5l.39 1.96l1.72 8.58l.39 1.96H2.75zm4.61-1.54l4-5m-.5 5.75l2.25-2.75");
}
</style><path class="e7r7jzbxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:windshield-sharp"} {...others} />);
}

export default Component;
