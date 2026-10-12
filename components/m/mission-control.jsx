import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a812dueoc {
  width: 18.5px;
  height: 11.25px;
  x: 2.75px;
  y: 3px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.5px;
}

.d6fbly8nu {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.75 7.25h.01");
}

.q_--6vbma {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 11c2-3.25 5.5-4.75 10-4.25");
}

.q35pjnbqo {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 15v2m-6.75.75h13.5q1 0 1.39.92l.72 1.66q.39.92-.61.92H3.75q-1 0-.61-.92l.72-1.66q.39-.92 1.39-.92");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="a812dueoc"/><path class="q_--6vbma"/><path class="d6fbly8nu"/><path class="q35pjnbqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mission-control"} {...others} />);
}

export default Component;
