import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iceevwbvj {
  d: path("M7 13.5V6h3a2.5 2.5 0 0 1 0 5H7m8 4.5h6v5.75h-6Zm0 2.25h6m-4.25-3.25V16m2.5-1.5V16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y18fw8yiw {
  d: path("M12.2 17H2.5V2.5H17v9.2");
}
</style><g class="ulnmmdpxh"><path class="y18fw8yiw"/><path class="iceevwbvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:long-stay-parking"} {...others} />);
}

export default Component;
