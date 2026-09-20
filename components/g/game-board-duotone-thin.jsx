import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e8jhv79aa {
  fill: currentColor;
  d: path("M3 3v18h18V3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hkh8hr_1w {
  fill: currentColor;
  d: path("M8 8v8h8V8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mu5pjkbqo {
  d: path("M3 3v18h18V3Z");
}

.spi9wczkf {
  d: path("M8 8v8h8V8Z");
}
</style><g class="hntgybcog"><path class="e8jhv79aa"/><path class="hkh8hr_1w"/><path class="mu5pjkbqo"/><path class="spi9wczkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:game-board-duotone-thin"} {...others} />);
}

export default Component;
