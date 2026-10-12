import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oe_nlabzu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 2.75a1.75 1.75 0 1 0 0 3.5m-4.25 5.5a3.25 3.25 0 0 1 6.5 0Zm0 0h6.5v6.75h-6.5zm3.25 2v2.75m-2 2h4l-.5 2.75h-3Z");
}
</style><path class="oe_nlabzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:eid-mubarak-lantern-sharp"} {...others} />);
}

export default Component;
