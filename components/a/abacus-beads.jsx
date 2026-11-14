import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fic8vib1h {
  d: path("M5.25 7.25a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0Zm3 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0Zm7.5 4.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-10.5 4.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.g7foyacxs {
  d: path("M2.5 2.5h19v19h-19Zm0 4.75h19M2.5 12h19m-19 4.75h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g7foyacxs"/><path class="fic8vib1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:abacus-beads"} {...others} />);
}

export default Component;
