import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.soy222bwl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 42.5V14.75a9.23 9.23 0 0 1 9.25-9.25H42.5M24 42.5h9.25a9.23 9.23 0 0 0 9.25-9.25V24m-12.333-2.5H17.834");
}
</style><path class="soy222bwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:flipshope"} {...others} />);
}

export default Component;
