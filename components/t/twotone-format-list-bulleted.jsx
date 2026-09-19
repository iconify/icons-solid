import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.as6ptnbee {
  cx: 4px;
  cy: 12px;
  r: 1.5px;
  fill: currentColor;
}

.itod0na8d {
  fill: currentColor;
  d: path("M7 5h14v2H7z");
}

.tkhq4bbks {
  cx: 4px;
  cy: 6px;
  r: 1.5px;
  fill: currentColor;
}

.v7f_ed-7h {
  fill: currentColor;
  d: path("M7 11h14v2H7zm0 6h14v2H7zm-3 2.5c.82 0 1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.68-1.5 1.5s.68 1.5 1.5 1.5");
}
</style><path class="itod0na8d"/><circle class="tkhq4bbks"/><path class="v7f_ed-7h"/><circle class="as6ptnbee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-format-list-bulleted"} {...others} />);
}

export default Component;
