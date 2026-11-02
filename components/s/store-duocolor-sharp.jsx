import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kra2j8bng {
  d: path("M3 3h18v6H3Zm2 6v12h14V9m-9 12v-6h4v6");
}

.nqqqpab0e {
  stroke-opacity: 0.4;
  d: path("M9 3v6m6-6v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="nqqqpab0e"/><path class="kra2j8bng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:store-duocolor-sharp"} {...others} />);
}

export default Component;
