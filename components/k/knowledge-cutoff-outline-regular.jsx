import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g-pndgz7k {
  d: path("M2 12h10");
}

.me2guebva {
  d: path("m18 9.5 3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pkr04599e {
  d: path("m21 9.5 -3 3");
}

.y_uork5-p {
  d: path("M15 7v10");
}
</style><g class="nrj6p8qat"><path class="g-pndgz7k"/><path class="y_uork5-p"/><path class="me2guebva"/><path class="pkr04599e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:knowledge-cutoff-outline-regular"} {...others} />);
}

export default Component;
