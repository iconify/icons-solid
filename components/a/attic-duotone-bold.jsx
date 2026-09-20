import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ae0h5kb0o {
  d: path("M9 15h6");
}

.b2n5wjbvh {
  d: path("M9 12v9");
}

.ccfz103ff {
  d: path("M2 12 12 2l10 10Z");
}

.h7dovcc6h {
  fill: currentColor;
  d: path("M2 12 12 2l10 10Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.o1dsref5n {
  d: path("M15 12v9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x3sflacnk {
  d: path("M9 18h6");
}
</style><g class="s0phu2bbs"><path class="h7dovcc6h"/><path class="ccfz103ff"/><path class="b2n5wjbvh"/><path class="o1dsref5n"/><path class="ae0h5kb0o"/><path class="x3sflacnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:attic-duotone-bold"} {...others} />);
}

export default Component;
