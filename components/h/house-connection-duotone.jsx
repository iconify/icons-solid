import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f9_a23b4a {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M16.222 17H7.778a2 2 0 0 1-2-2V9.352a2 2 0 0 1 .683-1.505l4.222-3.695a2 2 0 0 1 2.634 0l4.222 3.695a2 2 0 0 1 .683 1.505V15a2 2 0 0 1-2 2");
}

.ft5dv1b6b {
  fill: none;
}

.m4wx0jb4v {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 17H7.778a2 2 0 0 1-2-2V9.352a2 2 0 0 1 .683-1.505l4.222-3.695a2 2 0 0 1 2.634 0l4.222 3.695a2 2 0 0 1 .683 1.505V15a2 2 0 0 1-2 2zm0 0v4m-8 0h16");
}
</style><g class="ft5dv1b6b"><path class="f9_a23b4a"/><path class="m4wx0jb4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-connection-duotone"} {...others} />);
}

export default Component;
