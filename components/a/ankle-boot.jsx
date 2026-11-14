import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r6-lf0_5r {
  d: path("M4.25 4.5h6l.5 5l6 2.25C19 12.5 20 13.75 20 16H4.25Zm0 11.5v3.5h3.5V16");
}

.srd_ehm6l {
  d: path("M13.75 10.75c1 1.75 1.25 3.5 1 5.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r6-lf0_5r"/><path class="srd_ehm6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ankle-boot"} {...others} />);
}

export default Component;
