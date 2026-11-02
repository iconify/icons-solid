import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ah77tub-x {
  d: path("M6 11h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.nwzxboj1e {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12.01 6a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Zm0 10a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="nwzxboj1e"/><path class="ah77tub-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:divide-bulk-sharp"} {...others} />);
}

export default Component;
