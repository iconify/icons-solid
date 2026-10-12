import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gj-t1ib0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 10.25l4.5-4.5l4.5 4.5l4.5-4.5l4.5 4.5m-18 8l4.5-4.5l4.5 4.5l4.5-4.5l4.5 4.5");
}
</style><path class="gj-t1ib0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:zigzag-sharp"} {...others} />);
}

export default Component;
