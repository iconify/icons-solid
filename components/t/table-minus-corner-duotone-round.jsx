import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.sqatgeb3s {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 9H9v11H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4Z");
}

.yowmlshqa {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4h4a4 4 0 0 1 4 4v1M9 20H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h4M4 9h16M4 15h5m3-11v5m1 7h8");
}
</style><g class="ft5dv1b6b"><path class="sqatgeb3s"/><path class="yowmlshqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:table-minus-corner-duotone-round"} {...others} />);
}

export default Component;
