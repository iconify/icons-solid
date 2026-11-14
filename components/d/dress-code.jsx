import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f9loc6b5o {
  d: path("m8 3l4 4l4-4m-5 4h2l1 8l-2 2.5l-2-2.5Z");
}

.rqiqv_bly {
  d: path("M8 3L3.5 5.5l-1 5.5L6 12v9h12v-9l3.5-1l-1-5.5L16 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rqiqv_bly"/><path class="f9loc6b5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dress-code"} {...others} />);
}

export default Component;
