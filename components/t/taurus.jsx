import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nfthp5b0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9.75a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 1 1 0-10.5m-8.25-6c1 3 3.75 5.75 8.25 5.75s7.25-2.75 8.25-5.75");
}
</style><path class="nfthp5b0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:taurus"} {...others} />);
}

export default Component;
