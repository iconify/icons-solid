import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.giz1fi7ar {
  fill: currentColor;
  d: path("M10.5 7a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.u9r3av8kb {
  d: path("M2.5 2.5h19v19h-19Zm9.5 3v13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xf6vt8iwe {
  d: path("M12 7h6.5m-13 5H12m0 5h6.5");
}
</style><g class="ulnmmdpxh"><path class="u9r3av8kb"/><path class="giz1fi7ar"/><path class="xf6vt8iwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:timeline-layout"} {...others} />);
}

export default Component;
