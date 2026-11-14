import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.echeuub4k {
  d: path("m11.47 10.409l2.121 2.121l-7.601 7.602l-2.122-2.122Zm2.828-7.071l-2.121 2.121m4.242 0l-2.121 2.122m4.243 0l-2.122 2.121m4.243 0l-2.121 2.121");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vmjv-lb5x {
  d: path("m11.116 4.399l8.485 8.485l-2.828 2.828l-8.485-8.485Z");
}
</style><g class="ulnmmdpxh"><path class="vmjv-lb5x"/><path class="echeuub4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dish-brush"} {...others} />);
}

export default Component;
