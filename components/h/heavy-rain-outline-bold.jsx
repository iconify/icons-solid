import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c-pcdbceg {
  d: path("M4 14a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 5a5.5 5.5 0 0 1 4.5 9Z");
}

.l2z94vbar {
  d: path("m14 15.5 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}

.qvk3j9bfo {
  d: path("m18 18 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ykv448byy {
  d: path("M6 15.5 8.5 18a2.5 2.5 0 0 1 -5 0Z");
}

.z6i5xtbsj {
  d: path("m10 18 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}
</style><g class="s0phu2bbs"><path class="c-pcdbceg"/><path class="ykv448byy"/><path class="z6i5xtbsj"/><path class="l2z94vbar"/><path class="qvk3j9bfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:heavy-rain-outline-bold"} {...others} />);
}

export default Component;
