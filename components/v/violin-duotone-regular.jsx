import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e_uya30ac {
  d: path("M12 21c-4 0 -8 -1.5 -8 -4s5 -3.5 5 -5 -3.5 -2 -3.5 -3.5S8 6 10 6h4c2 0 4.5 1 4.5 2.5S15 10.5 15 12s5 2.5 5 5 -4 4 -8 4");
}

.gnq8duvln {
  fill: currentColor;
  d: path("M12 21c-4 0 -8 -1.5 -8 -4s5 -3.5 5 -5 -3.5 -2 -3.5 -3.5S8 6 10 6h4c2 0 4.5 1 4.5 2.5S15 10.5 15 12s5 2.5 5 5 -4 4 -8 4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m-y6zjb5q {
  d: path("M16 15v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rc20j6byk {
  d: path("M12 2v4");
}

.u8oheccad {
  d: path("M8 15v3");
}
</style><g class="nrj6p8qat"><path class="gnq8duvln"/><path class="e_uya30ac"/><path class="rc20j6byk"/><path class="u8oheccad"/><path class="m-y6zjb5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:violin-duotone-regular"} {...others} />);
}

export default Component;
