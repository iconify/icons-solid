import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b1i_6xv4v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 2.5h3.25A2.625 2.625 0 0 1 11 5.125v4.25A2.625 2.625 0 0 1 8.375 12h-3.25A2.625 2.625 0 0 1 2.5 9.375v-4.25A2.625 2.625 0 0 1 5.125 2.5m10.5 9.5h3.25a2.625 2.625 0 0 1 2.625 2.625v4.25a2.625 2.625 0 0 1-2.625 2.625h-3.25A2.625 2.625 0 0 1 13 18.875v-4.25A2.625 2.625 0 0 1 15.625 12M5.25 6h3m-3 3h2M16 15.5h3m-3 3h2M16.25 3.75L14 6l2.25 2.25M14 6h6.5m-2.25-2.25L20.5 6l-2.25 2.25");
}
</style><path class="b1i_6xv4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:document-translation"} {...others} />);
}

export default Component;
