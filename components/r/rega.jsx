import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.m1pwionrw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.384 17.5H13.181l3.384-13h14.202zm10.818 13H24l3.384-13h14.202zm-17.586 13H6.414l3.384-13H24z");
}
</style><path class="m1pwionrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:rega"} {...others} />);
}

export default Component;
