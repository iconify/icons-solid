import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ifdkcehuu {
  d: path("M9.5 13h5v5h-5Zm7 0h5v5h-5Z");
}

.k8xxponox {
  d: path("M2.5 5h15v3.5h-15Z");
}

.mhm0bybzc {
  fill: currentColor;
  d: path("M14 5.5h3V8h-3ZM2.5 13h5v5h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k8xxponox"/><path class="mhm0bybzc"/><path class="ifdkcehuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:test-strip"} {...others} />);
}

export default Component;
