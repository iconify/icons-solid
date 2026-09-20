import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fh_w5bciu {
  fill: currentColor;
  d: path("M5.616 20q-.667 0-1.141-.475T4 18.386V5.615q0-.666.475-1.14T5.615 4h4.27q.666 0 1.14.475t.475 1.14v12.77q0 .666-.475 1.14T9.885 20zm8.5 0q-.667 0-1.141-.475t-.475-1.14v-4.77q0-.666.475-1.14t1.14-.475h4.27q.666 0 1.14.475t.475 1.14v4.77q0 .666-.475 1.14t-1.14.475zm0-9q-.667 0-1.141-.475t-.475-1.14v-3.77q0-.666.475-1.14T14.115 4h4.27q.666 0 1.14.475T20 5.615v3.77q0 .666-.475 1.14t-1.14.475z");
}
</style><path class="fh_w5bciu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:space-dashboard-rounded"} {...others} />);
}

export default Component;
