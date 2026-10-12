import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s8q_eg6wc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.18 4H17v4.5m0 0a5 5 0 0 1-1.62 3.69M9.81 13a5 5 0 0 1-2.31-2.31m4.5 4.49v5.07m-4 0h8M3.75 3.75l16.5 16.5");
}
</style><path class="s8q_eg6wc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:no-alcohol-sharp"} {...others} />);
}

export default Component;
