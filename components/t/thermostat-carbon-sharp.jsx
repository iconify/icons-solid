import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hpmkb9brn {
  fill: currentColor;
  d: path("M12 21.377L2.623 12L12 2.623L21.377 12z");
}
</style><path class="hpmkb9brn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:thermostat-carbon-sharp"} {...others} />);
}

export default Component;
