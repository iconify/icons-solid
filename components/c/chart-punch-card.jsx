import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uhyaxbbct {
  fill: currentColor;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm5.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm7.75 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM2.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm8.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm5.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM3.25 19a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm7 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM18 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><path class="uhyaxbbct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chart-punch-card"} {...others} />);
}

export default Component;
