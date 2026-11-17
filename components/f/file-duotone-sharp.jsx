import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.im5zac-eg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 3h8l.034.034q-.01-.01-.022-.004a.02.02 0 0 0-.012.018V9h5.952a.02.02 0 0 0 .018-.012q.006-.012-.004-.022L19 9v12H5Z");
}

.rp9w69l-h {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3H5v18h14V9m-6-6l6 6m-6-6v6h6");
}
</style><g class="ft5dv1b6b"><path class="im5zac-eg"/><path class="rp9w69l-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:file-duotone-sharp"} {...others} />);
}

export default Component;
