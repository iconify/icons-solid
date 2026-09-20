import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a62njb70e {
  d: path("M15 6v12");
}

.b58isb55w {
  d: path("M12 6v7");
}

.d2gpzsh-s {
  d: path("M9 6v12");
}

.lo0rkwbmg {
  d: path("M18 6v7");
}

.nnzlfsekh {
  d: path("M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wp0aeb9st {
  d: path("M6 6v7");
}
</style><g class="nrj6p8qat"><path class="nnzlfsekh"/><path class="d2gpzsh-s"/><path class="a62njb70e"/><path class="wp0aeb9st"/><path class="b58isb55w"/><path class="lo0rkwbmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:piano-outline-regular"} {...others} />);
}

export default Component;
