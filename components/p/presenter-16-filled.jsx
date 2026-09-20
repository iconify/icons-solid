import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.h48r3dlja {
  fill: currentColor;
  d: path("M13.5 8a.5.5 0 0 1 .354.854L11 11.707v1.543A1.75 1.75 0 0 1 9.25 15h-2.5A1.75 1.75 0 0 1 5 13.25v-1.543L2.146 8.854A.5.5 0 0 1 2.5 8zM9.751 6c.698 0 1.298.41 1.58 1H4.67c.282-.59.882-1 1.58-1zM8 1a2 2 0 1 1 0 4a2 2 0 0 1 0-4");
}
</style><path class="h48r3dlja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:presenter-16-filled"} {...others} />);
}

export default Component;
