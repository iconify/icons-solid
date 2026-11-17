import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.kc_-307vq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 6H3v15h10V11M8 6l5 5M8 6v5h5m-2-8h5m0 0l5 5m-5-5v5h5m0 0v10h-4");
}

.lqaangbly {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 6h5l.034.034q-.01-.01-.022-.004A.02.02 0 0 0 8 6.048V11h4.952a.02.02 0 0 0 .018-.012q.005-.013-.004-.022L13 11v10H3Z");
}
</style><g class="ft5dv1b6b"><path class="lqaangbly"/><path class="kc_-307vq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:files-duotone-sharp"} {...others} />);
}

export default Component;
