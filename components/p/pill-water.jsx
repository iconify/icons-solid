import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.id18rfb-n {
  d: path("m8.027 4.568l6.578-2.394l1.368 3.758l-6.578 2.394Z");
}

.st6i_zbqe {
  d: path("M5.5 8L7 21.5h10L18.5 8M6.25 14.75h11.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="st6i_zbqe"/><path class="id18rfb-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pill-water"} {...others} />);
}

export default Component;
