import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iymet_cml {
  d: path("M15.5 4H19a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V8l4 -4h3.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ocmla0jdf {
  d: path("M9 9h6v6H9Z");
}

.uhawluh-v {
  d: path("M6.5 9.5 9 12l-2.5 2.5");
}

.vc5bmsqzd {
  d: path("M5 12h4");
}
</style><g class="nrj6p8qat"><path class="iymet_cml"/><path class="vc5bmsqzd"/><path class="uhawluh-v"/><path class="ocmla0jdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:injection-flaw-outline-regular"} {...others} />);
}

export default Component;
