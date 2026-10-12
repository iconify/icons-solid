import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rmaomnb3k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 20.5l1.97-1.97m3.54-3.54l1.22-1.22m3.54-3.54l1.22-1.22m3.54-3.54L20.5 3.5M5.35 18.04l-.99-3.8q-.13-.49.36-.36l3.8.99q.49.12.13.48l-2.82 2.82q-.36.36-.48-.13m4.76-4.76l-.99-3.8q-.13-.49.36-.36l3.8.99q.49.12.13.48l-2.82 2.82q-.36.36-.48-.13m4.76-4.76l-.99-3.8q-.13-.49.36-.36l3.8.99q.49.12.13.48l-2.82 2.82q-.36.36-.48-.13");
}
</style><path class="rmaomnb3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cold-front"} {...others} />);
}

export default Component;
