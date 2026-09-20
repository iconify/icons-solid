import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j2mpfj38h {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20H15.27v-1h3.115q.231 0 .424-.192t.192-.424V7H5v11.385q0 .23.192.423t.423.192h3.116v1zm5.884 0v-6.304l-2.1 2.1l-.708-.719L12 11.769l3.308 3.308l-.708.72l-2.1-2.1V20z");
}
</style><path class="j2mpfj38h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:open-in-browser-outline"} {...others} />);
}

export default Component;
