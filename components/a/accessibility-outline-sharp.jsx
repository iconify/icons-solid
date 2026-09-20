import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ccv395bda {
  fill: currentColor;
  d: path("M10.809 5.268q-.501-.5-.501-1.191q0-.69.5-1.191q.502-.502 1.192-.502t1.191.502q.501.5.501 1.191q0 .69-.5 1.191q-.502.501-1.192.501t-1.191-.5M9.808 21.5V8.423H3.962v-1h16.077v1h-5.847V21.5h-1V16h-2.384v5.5z");
}
</style><path class="ccv395bda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:accessibility-outline-sharp"} {...others} />);
}

export default Component;
