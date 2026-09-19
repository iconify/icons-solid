import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rpxe9ibnu {
  cx: 12px;
  cy: 19px;
  r: 2px;
  fill: currentColor;
}

.xi7mcbcba {
  fill: currentColor;
  d: path("M10 3h4v12h-4z");
}
</style><circle class="rpxe9ibnu"/><path class="xi7mcbcba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-priority-high"} {...others} />);
}

export default Component;
