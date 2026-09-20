import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.otoekdx_x {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm4.769-3.192h6q.413 0 .706-.294t.294-.706t-.294-.707t-.706-.293h-6q-.414 0-.707.293t-.293.707t.293.706q.293.294.707.294");
}
</style><path class="otoekdx_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:position-bottom-right-rounded"} {...others} />);
}

export default Component;
