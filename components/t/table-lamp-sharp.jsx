import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ncbeau7-m {
  fill: currentColor;
  d: path("M13 20.5v-1h7v1zm3-2.77V6.578h-5.308v3.654H4.398L7.128 4h3.564v1.577H17v12.154z");
}
</style><path class="ncbeau7-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:table-lamp-sharp"} {...others} />);
}

export default Component;
