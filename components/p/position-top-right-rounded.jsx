import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g-dv7ubev {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm4.769-10.808h6q.413 0 .706-.293t.294-.707t-.294-.707t-.706-.293h-6q-.414 0-.707.293q-.293.294-.293.707t.293.707q.293.293.707.293");
}
</style><path class="g-dv7ubev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:position-top-right-rounded"} {...others} />);
}

export default Component;
