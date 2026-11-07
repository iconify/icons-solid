import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dy_u6hb4r {
  fill: currentColor;
  d: path("M5 21V6.789h8.423V21zm10.616-3.77V4.597h-5.039V3H19v14.23z");
}
</style><path class="dy_u6hb4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:mirror-stack-sharp"} {...others} />);
}

export default Component;
