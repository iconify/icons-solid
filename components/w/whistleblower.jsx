import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j0cvqvmzv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5H6L12.5 5v14L6 14.5H2.5Zm12.681.25a3.5 3.5 0 0 1 0 4.5m2.107-6.267a6.25 6.25 0 0 1 0 8.034m2.106-9.802a9 9 0 0 1 0 11.57");
}
</style><path class="j0cvqvmzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:whistleblower"} {...others} />);
}

export default Component;
