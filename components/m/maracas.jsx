import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ddu8v7bmg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.6 3.81a3 3.75-10 1 0 1.3 7.38a3 3.75-10 1 0-1.3-7.38m10.8 0a3 3.75 10 1 1-1.3 7.38a3 3.75 10 1 1 1.3-7.38m-9.5 7.38l1.56 8.86m6.64-8.86l-1.56 8.86");
}
</style><path class="ddu8v7bmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:maracas"} {...others} />);
}

export default Component;
