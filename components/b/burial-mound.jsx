import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xzuqjr1_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5h19M3 17.5c1-8 11-8 12 0M19.375 6zA1.625 1.625 0 0 1 21 7.625v8.25a1.625 1.625 0 0 1-1.625 1.625a1.625 1.625 0 0 1-1.625-1.625v-8.25A1.625 1.625 0 0 1 19.375 6");
}
</style><path class="xzuqjr1_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:burial-mound"} {...others} />);
}

export default Component;
