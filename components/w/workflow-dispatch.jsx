import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bhkioio2l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h7v7h-7ZM14 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM2.5 14.5h7v7h-7Zm7-8.5H14M6 9.5v5m8.5-1l7.25 4.25L14.5 22Z");
}
</style><path class="bhkioio2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:workflow-dispatch"} {...others} />);
}

export default Component;
