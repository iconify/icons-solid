import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ezivsgvio {
  stroke-opacity: 0.4;
  d: path("M21 12V8c0-.369-.631-.369-1 0l-3 3a1.414 1.414 0 0 0 0 2l3 3c.369.369 1 .369 1 0z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tz9urb5yj {
  d: path("M3 12V8c0-.369.631-.369 1 0l3 3a1.414 1.414 0 0 1 0 2l-3 3c-.369.369-1 .369-1 0zm9-7v2m0 4v2m0 4v2");
}
</style><g class="nrj6p8qat"><path class="ezivsgvio"/><path class="tz9urb5yj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flip-horizontal-duocolor"} {...others} />);
}

export default Component;
