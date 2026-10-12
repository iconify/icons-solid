import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.us7vsbarc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.25h8.5v15h-8.5zm0 3.75h8.5m-8.5 3.75h8.5m-8.5 3.75h8.5m2.5-3.75h7.5v7.5h-7.5zm0 3.75h7.5");
}
</style><path class="us7vsbarc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:coin-stack-sharp"} {...others} />);
}

export default Component;
