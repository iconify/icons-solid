import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m_jk1nb0l {
  d: path("M5 11h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.okud9xj_d {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.vs9ju4bgh {
  d: path("M15 8h4v4h-4Z");
}

.zrqurcb-a {
  d: path("M5 15h8");
}
</style><g class="nrj6p8qat"><path class="okud9xj_d"/><path class="vs9ju4bgh"/><path class="m_jk1nb0l"/><path class="zrqurcb-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:postcard-outline-regular"} {...others} />);
}

export default Component;
