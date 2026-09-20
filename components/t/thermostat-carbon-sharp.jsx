import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k7udfjbos {
  fill: currentColor;
  d: path("M12 22.8L1.2 12L12 1.2L22.8 12z");
}
</style><path class="k7udfjbos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:thermostat-carbon-sharp"} {...others} />);
}

export default Component;
