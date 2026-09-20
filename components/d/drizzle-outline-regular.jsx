import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c-pcdbceg {
  d: path("M4 14a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 5a5.5 5.5 0 0 1 4.5 9Z");
}

.cfjjc4b9u {
  d: path("m8 17 -2.5 2.5");
}

.doij5pb5x {
  d: path("M10.5 19.5 8 22");
}

.k6xu7tbiy {
  d: path("m18 17 -2.5 2.5");
}

.luc_hlbxh {
  d: path("m13 17 -2.5 2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p-vzdvbyx {
  d: path("M15.5 19.5 13 22");
}
</style><g class="nrj6p8qat"><path class="c-pcdbceg"/><path class="cfjjc4b9u"/><path class="luc_hlbxh"/><path class="k6xu7tbiy"/><path class="doij5pb5x"/><path class="p-vzdvbyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:drizzle-outline-regular"} {...others} />);
}

export default Component;
