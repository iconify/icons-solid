import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d5_18n1qg {
  d: path("M8 21V11l4-4l4 4v10m-8-8l-4 2v6h16v-6l-4-2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ohdwadw8m {
  stroke-opacity: 0.4;
  d: path("M12 3v4m-2-2h4");
}
</style><g class="nrj6p8qat"><path class="ohdwadw8m"/><path class="d5_18n1qg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:church-duocolor-sharp"} {...others} />);
}

export default Component;
