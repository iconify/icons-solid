import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.myqgmabes {
  cx: 9px;
  cy: 8px;
  r: 4px;
  fill: currentColor;
}

.virs7ab-w {
  fill: currentColor;
  d: path("M9 14c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4m11-4V7h-2v3h-3v2h3v3h2v-3h3v-2z");
}
</style><circle class="myqgmabes"/><path class="virs7ab-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-person-add-alt-1"} {...others} />);
}

export default Component;
