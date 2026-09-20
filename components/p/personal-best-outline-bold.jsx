import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bdehoybwy {
  d: path("M8 8.5a2.5 2.5 0 0 1 0 -5");
}

.bx6cs-b9q {
  d: path("M16 3.5a2.5 2.5 0 0 1 0 5");
}

.lkivjibuo {
  d: path("M12 13v7");
}

.o8p9igehf {
  d: path("M8 3h8v6l-4 4 -4 -4Z");
}

.qdn88l2uv {
  d: path("M7 20h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="o8p9igehf"/><path class="lkivjibuo"/><path class="qdn88l2uv"/><path class="bdehoybwy"/><path class="bx6cs-b9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:personal-best-outline-bold"} {...others} />);
}

export default Component;
