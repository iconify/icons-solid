import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zbd8ddb5f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 13.75a9.5 9.5 0 0 1 17.5 0l-4.5 2a4.5 4.5 0 0 0-8.5 0Zm5-5l2 4.5m5.5-4.5l-2 4.5");
}
</style><path class="zbd8ddb5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:colour-analogous"} {...others} />);
}

export default Component;
