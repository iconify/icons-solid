import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ebc1i1j0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.25V21.5m-1.75-17a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M2.5 10a4.75 1.5 0 1 0 9.5 0a4.75 1.5 0 1 0-9.5 0m9.5 0a4.75 1.5 0 1 0 9.5 0a4.75 1.5 0 1 0-9.5 0m-8.5 5a4.25 1.5 0 1 0 8.5 0a4.25 1.5 0 1 0-8.5 0m8.5 0a4.25 1.5 0 1 0 8.5 0a4.25 1.5 0 1 0-8.5 0");
}
</style><path class="ebc1i1j0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:damselfly"} {...others} />);
}

export default Component;
