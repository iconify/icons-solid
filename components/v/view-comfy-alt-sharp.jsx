import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.soa8ozaic {
  fill: currentColor;
  d: path("M2 10V2h8v8zm0 12v-8h8v8zm12-12V2h8v8zm0 12v-8h8v8z");
}
</style><path class="soa8ozaic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-comfy-alt-sharp"} {...others} />);
}

export default Component;
