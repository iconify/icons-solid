import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.jfkpo0bvs {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 12c0-.265.105-.52.293-.707l9-9a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-9 9A1 1 0 0 1 12 16H9a1 1 0 0 1-1-1Z");
}

.qdktjxjhq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 15v-3l9-9l3 3l-9 9zm6-9l3 3M3 21l3-3l3 3m4 0h8");
}
</style><g class="ft5dv1b6b"><path class="jfkpo0bvs"/><path class="qdktjxjhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:text-edit-duotone-sharp"} {...others} />);
}

export default Component;
