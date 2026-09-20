import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cdily2n9h {
  d: path("m4 13 8 8 8 -8");
}

.fhdzjxbpi {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m4 8.5 8 8 8 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kw9oa7xce {
  d: path("m4 4 8 8 8 -8");
}

.r8i06vb7h {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m4 4 8 8 8 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.todsfdhkg {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m4 13 8 8 8 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xm7-1nb3t {
  d: path("m4 8.5 8 8 8 -8");
}
</style><g class="hntgybcog"><path class="r8i06vb7h"/><path class="fhdzjxbpi"/><path class="todsfdhkg"/><path class="kw9oa7xce"/><path class="xm7-1nb3t"/><path class="cdily2n9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:layers-duotone-thin"} {...others} />);
}

export default Component;
