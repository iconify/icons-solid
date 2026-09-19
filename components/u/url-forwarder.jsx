import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.x2i3hzbzt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.905 20.033H9.093L4.5 27.989h3.812ZM28.182 9.024v10.784h-3.811l-4.594 7.956h8.405v11.212L43.5 23.844Zm-7.75 11.009H16.62l-4.593 7.956h3.811Z");
}
</style><path class="x2i3hzbzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:url-forwarder"} {...others} />);
}

export default Component;
