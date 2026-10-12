import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dn9a3vobi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 21.25V10A3.5 3.5 0 0 1 9 6.5h1.5a1.5 1.5 0 0 0 3 0H15a3.5 3.5 0 0 1 3.5 3.5v11.25Zm3-12l7 9.5m0-9.5l-7 9.5");
}
</style><path class="dn9a3vobi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:safety-harness"} {...others} />);
}

export default Component;
