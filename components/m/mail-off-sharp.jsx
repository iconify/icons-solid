import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.auko8givk {
  fill: currentColor;
  d: path("M19.775 22.625L17.15 20H2V4h2l2 2H3.15L1.375 4.225L2.8 2.8l18.4 18.4zM22 19.15l-7.625-7.625L20 8V6l-6.85 4.3L6.85 4H22z");
}
</style><path class="auko8givk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mail-off-sharp"} {...others} />);
}

export default Component;
