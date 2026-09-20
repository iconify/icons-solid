import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":25,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.irkn49b_k {
  d: path("M8.334 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0z");
  fill: currentColor;
}

.ldgze-b-i {
  d: path("M18.334 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4z");
  fill: currentColor;
}

.yjqdkbxnv {
  d: path("M14.334 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="irkn49b_k"/><path class="yjqdkbxnv"/><path class="ldgze-b-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:more-24-filled"} {...others} />);
}

export default Component;
