import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dmpb6dl5m {
  d: path("M3.75 17.5a14.5 14.5 0 0 0 16.5 0");
}

.t7g0ct9xi {
  d: path("M10.5 4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z0pnk883i {
  d: path("M6.5 19L12 6l5.5 13");
}
</style><g class="ulnmmdpxh"><path class="t7g0ct9xi"/><path class="z0pnk883i"/><path class="dmpb6dl5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:compass-drafting-circle"} {...others} />);
}

export default Component;
