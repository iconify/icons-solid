import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fwgc4z0nd {
  d: path("M13.75 7.75h5V11h-5ZM5.5 15.5h1.25m5.75 0h1.25m2.75 0h1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y8sm46qhb {
  d: path("M2.5 5h19v14h-19Zm3 4.5h1.25m2.75 0h1.25");
}
</style><g class="ulnmmdpxh"><path class="y8sm46qhb"/><path class="fwgc4z0nd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cheque-blank"} {...others} />);
}

export default Component;
