import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hoatk1qyj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 13L3 19C3 20.6569 4.3431 22 6 22L18 22C19.6569 22 21 20.6569 21 19L21 13Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u7j23si5d {
  d: path("M5 4.1716C3.8014 4.5954 3 5.7287 3 7L3 19C3 20.6569 4.3431 22 6 22L18 22C19.6569 22 21 20.6569 21 19L21 7C21 5.7287 20.1986 4.5954 19 4.1716M3 13L21 13M12 8V2M9 5L12 2L15 5");
}
</style><g class="nrj6p8qat"><path class="hoatk1qyj"/><path class="u7j23si5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:table-rows-move-up-two-tone"} {...others} />);
}

export default Component;
