import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m3ky87x8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.26 4.11l2.23 3.78q.51.86-.49.86H3.5q-1 0-.49-.86l2.23-3.78q.51-.86 1.02 0M12 6.25h9.25m-18.5 6h12M6.25 16h12.5m-9 3.75h11.5");
}
</style><path class="m3ky87x8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:stack-trace"} {...others} />);
}

export default Component;
