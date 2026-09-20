import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a-jefodqm {
  d: path("M15.5 17.5 18 20l2.5 -2.5");
}

.bt2nqn0-a {
  d: path("M18 11v9");
}

.hm90u5bqs {
  d: path("M3.5 6.5 6 4l2.5 2.5");
}

.l6baspbie {
  fill: currentColor;
  d: path("M3 16a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ns53blbaz {
  d: path("M3 16a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.pb1wrt76j {
  d: path("M15 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.pj7pdobto {
  d: path("M6 4v9");
}

.pldekmw0i {
  fill: currentColor;
  d: path("M15 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="l6baspbie"/><path class="pldekmw0i"/><path class="ns53blbaz"/><path class="pj7pdobto"/><path class="hm90u5bqs"/><path class="pb1wrt76j"/><path class="bt2nqn0-a"/><path class="a-jefodqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:elo-duotone-bold"} {...others} />);
}

export default Component;
