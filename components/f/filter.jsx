import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cqni5we8a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.177 4.5h9.646a1.75 1.75 0 0 1 1.359 2.854l-3.79 4.664A1.75 1.75 0 0 0 14 13.121v4.797a1.75 1.75 0 0 1-.967 1.566L12 20a1.382 1.382 0 0 1-2-1.236v-5.643a1.75 1.75 0 0 0-.392-1.103l-3.79-4.664A1.75 1.75 0 0 1 7.177 4.5");
}
</style><path class="cqni5we8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:filter"} {...others} />);
}

export default Component;
