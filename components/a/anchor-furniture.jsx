import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yhjt_pb2i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5v19M11.625 6h6.25A2.625 2.625 0 0 1 20.5 8.625v10.25a2.625 2.625 0 0 1-2.625 2.625h-6.25A2.625 2.625 0 0 1 9 18.875V8.625A2.625 2.625 0 0 1 11.625 6M3.5 4L9 8.5M14.75 6v15.5m-2.75-8h.01m5.49 0h.01");
}
</style><path class="yhjt_pb2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:anchor-furniture"} {...others} />);
}

export default Component;
