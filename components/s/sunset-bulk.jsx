import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b0n317b1r {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m11.292 10.707l-2.999-3a.999.999 0 1 1 1.414-1.414L11 7.586V3a1 1 0 0 1 2 0v4.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.jf11dvboh {
  d: path("m5.707 9.293l2 2a.999.999 0 1 1-1.414 1.414l-2-2a.999.999 0 1 1 1.414-1.414m14 1.414l-2 2a.999.999 0 1 1-1.414-1.414l2-2a.999.999 0 1 1 1.414 1.414M8 17a4 4 0 0 1 8 0a1 1 0 0 1-2 0a2 2 0 1 0-4 0a1 1 0 0 1-2 0m-5-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m18 0a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2ZM3 20h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="b0n317b1r"/><path class="jf11dvboh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sunset-bulk"} {...others} />);
}

export default Component;
