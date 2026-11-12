import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d6jcy2ovj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 11h-8v8a8 8 0 1 1 8-8");
}

.ft5dv1b6b {
  fill: none;
}

.twz9pacey {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 11a8 8 0 1 0-8 8m0-12v4h3m2 4v6m4-6v6");
}
</style><g class="ft5dv1b6b"><path class="d6jcy2ovj"/><path class="twz9pacey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:clock-pause-duotone-sharp"} {...others} />);
}

export default Component;
