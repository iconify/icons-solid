import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lch8njzqj {
  d: path("m10.05 6.48l5.4 2.29L16 9l-.55.25l-1.65.75l-.55.25l-.25.55l-.75 1.65L12 13l-.21-.56l-2.08-5.63l-.21-.56z");
}

.x06dkab3n {
  d: path("M2.75 3.25h18.5v12.5H2.75zm5.75 17.5h7m-3.5-5v5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="x06dkab3n"/><path class="lch8njzqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:computer-use-ai-sharp"} {...others} />);
}

export default Component;
