import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ffm8-pbcs {
  d: path("M14 18a4 4 0 1 1 8 0a4 4 0 0 1-8 0m3.222 1.843a2.001 2.001 0 0 0 1.556-3.686a2 2 0 0 0-1.556 3.686");
}

.no3egd27f {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 13h-8v8a1 1 0 0 1-1 1a10 10 0 1 1 10-10a1 1 0 0 1-1 1");
}
</style><g class="cuyn6tgcc"><path class="no3egd27f"/><path class="ffm8-pbcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-pie-circle-bulk"} {...others} />);
}

export default Component;
