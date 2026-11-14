import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lqbpevk-t {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.25 5.75h-.548q-2.074 0-2.457 2.04l-.113.606q-.209 1.112.514 1.983q.722.871 1.854.871h.548q2.074 0 2.457-2.04l.113-.606q.209-1.112-.514-1.983q-.722-.871-1.854-.871m6.202 0H13q1.132 0 1.854.871t.514 1.983l-.113.606q-.383 2.04-2.457 2.04h-.548q-1.132 0-1.854-.871t-.514-1.983l.113-.606q.383-2.04 2.457-2.04m7.298 0h-.548q-2.074 0-2.457 2.04l-.113.606q-.209 1.112.514 1.983q.722.871 1.854.871h.548q2.074 0 2.457-2.04l.113-.606q.209-1.112-.514-1.983q-.722-.871-1.854-.871m-15.298 7H5q1.132 0 1.854.871t.514 1.983l-.113.606q-.383 2.04-2.457 2.04H4.25q-1.132 0-1.854-.871t-.514-1.983l.113-.606q.383-2.04 2.457-2.04m7.298 0h-.548q-2.074 0-2.457 2.04l-.113.606q-.209 1.112.514 1.983q.722.871 1.854.871h.548q2.074 0 2.457-2.04l.113-.606q.209-1.112-.514-1.983q-.722-.871-1.854-.871m6.202 0h.548q1.132 0 1.854.871t.514 1.983l-.113.606q-.383 2.04-2.457 2.04h-.548q-1.132 0-1.854-.871t-.514-1.983l.113-.606q.383-2.04 2.457-2.04");
}
</style><path class="lqbpevk-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:spatial-launcher"} {...others} />);
}

export default Component;
