import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.on4ig8t5d {
  d: path("M5 4v10");
}

.qdjgl5bua {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19 14a7 7 0 0 1 -14 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.smyhnv9tm {
  d: path("M19 14a7 7 0 0 1 -14 0");
}

.w64svpbpc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 4v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xers3_bpx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19 4v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ydl8e0r_x {
  d: path("M19 4v10");
}
</style><g class="nrj6p8qat"><path class="w64svpbpc"/><path class="qdjgl5bua"/><path class="xers3_bpx"/><path class="on4ig8t5d"/><path class="smyhnv9tm"/><path class="ydl8e0r_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:union-duotone-regular"} {...others} />);
}

export default Component;
