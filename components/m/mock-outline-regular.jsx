import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eud-3ptuk {
  d: path("M15 12h7");
}

.kvnpcyz2l {
  d: path("M15 18h7");
}

.n6ndjw6jf {
  d: path("M4 9h7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o9y-9tbqv {
  d: path("M15 6h7");
}

.y76hd_85j {
  d: path("M2 6a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="y76hd_85j"/><path class="n6ndjw6jf"/><path class="o9y-9tbqv"/><path class="eud-3ptuk"/><path class="kvnpcyz2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:mock-outline-regular"} {...others} />);
}

export default Component;
