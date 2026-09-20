import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gsl5knvuq {
  d: path("M15 8h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p0o5ir5ue {
  d: path("M15 16h6");
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.sjde2nyhb {
  d: path("M3 8h6");
}

.vd0jm7r_j {
  d: path("M3 16h6");
}
</style><g class="nrj6p8qat"><path class="sjde2nyhb"/><path class="vd0jm7r_j"/><path class="r7xk8o29f"/><path class="gsl5knvuq"/><path class="p0o5ir5ue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:text-columns-outline-regular"} {...others} />);
}

export default Component;
