import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o0uc6p-po {
  fill: currentColor;
  d: path("M12.75 9.5h3V15h-3Z");
}

.o0uxpabcc {
  d: path("M2.5 3.5h19v17h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vq_z6bcur {
  d: path("m7 9l3 3l-3 3");
}
</style><g class="ulnmmdpxh"><path class="o0uxpabcc"/><path class="vq_z6bcur"/><path class="o0uc6p-po"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:terminal-cursor"} {...others} />);
}

export default Component;
