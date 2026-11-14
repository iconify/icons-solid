import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f1lcbmbja {
  d: path("M2.5 4.25h19v15.5h-19Zm5 7.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vrr0vxb2o {
  d: path("M9.99 9.911a3.25 3.25 0 0 1 0 4.178m2.834-5.817a6.5 6.5 0 0 1 0 7.456m3.12-8.603a9.75 9.75 0 0 1 0 9.75");
}
</style><g class="ulnmmdpxh"><path class="f1lcbmbja"/><path class="vrr0vxb2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:credit-card-tap"} {...others} />);
}

export default Component;
