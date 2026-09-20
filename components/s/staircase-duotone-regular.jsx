import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bos0j4biy {
  d: path("M3 21h18");
}

.fnbgpcbhf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 21h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ihgbwbbyj {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 21v-4h5v-4h5V9h5V5h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sb40gqbga {
  d: path("M3 21v-4h5v-4h5V9h5V5h3");
}
</style><g class="nrj6p8qat"><path class="ihgbwbbyj"/><path class="fnbgpcbhf"/><path class="sb40gqbga"/><path class="bos0j4biy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:staircase-duotone-regular"} {...others} />);
}

export default Component;
