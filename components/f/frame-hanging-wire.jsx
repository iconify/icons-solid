import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fgypfbc5b {
  d: path("m6 18l3.5-3.5l3 2.25L15 14.5l3 3");
}

.lcmgkac4b {
  d: path("M2.5 10h19v11h-19Zm6 0L12 4.5l3.5 5.5M12 2.5v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lcmgkac4b"/><path class="fgypfbc5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:frame-hanging-wire"} {...others} />);
}

export default Component;
