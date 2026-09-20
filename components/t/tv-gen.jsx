import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ydgt1_ttj {
  fill: currentColor;
  d: path("M4.616 19.462V18q-.667 0-1.141-.475T3 16.386v-9.77q0-.666.475-1.14T4.615 5h14.77q.666 0 1.14.475T21 6.615v9.77q0 .666-.475 1.14t-1.14.475v1.462h-.5L18.369 18H5.675l-.56 1.462z");
}
</style><path class="ydgt1_ttj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tv-gen"} {...others} />);
}

export default Component;
