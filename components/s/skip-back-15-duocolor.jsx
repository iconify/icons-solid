import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a44obwemu {
  d: path("M20 8A8.944 8.944 0 0 0 4 8m4 0H4V4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ylk0v3brf {
  stroke-opacity: 0.4;
  d: path("m6 15l2-2v8m10-8h-6v4h2c2 0 4 0 4 2s-2 2-4 2h-2");
}
</style><g class="nrj6p8qat"><path class="ylk0v3brf"/><path class="a44obwemu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:skip-back-15-duocolor"} {...others} />);
}

export default Component;
