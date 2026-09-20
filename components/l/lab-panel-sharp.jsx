import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hxmne99pr {
  fill: currentColor;
  d: path("M2 20v-7h2V8.321H3V5.04h7v3.28H9V13h6V8.321h-1V5.04h7v3.28h-1V13h2v7zm14-7h3V8.385h-3zM5 13h3V8.385H5z");
}
</style><path class="hxmne99pr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:lab-panel-sharp"} {...others} />);
}

export default Component;
