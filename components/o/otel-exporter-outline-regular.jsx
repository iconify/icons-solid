import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dqdll7bts {
  d: path("M9.5 6.5 12 4l2.5 2.5");
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zx9kn83ea {
  d: path("M12 4v8");
}
</style><g class="nrj6p8qat"><path class="n0n63pb2v"/><path class="zx9kn83ea"/><path class="dqdll7bts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:otel-exporter-outline-regular"} {...others} />);
}

export default Component;
