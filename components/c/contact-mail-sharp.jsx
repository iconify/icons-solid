import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hcvnnbwln {
  fill: currentColor;
  d: path("M14 11h7V6h-7zm3.5-1.25L15 8V7l2.5 1.75L20 7v1zM0 21V3h24v18zm11.125-7.875Q12 12.25 12 11t-.875-2.125T9 8t-2.125.875T6 11t.875 2.125T9 14t2.125-.875M2.1 19h13.8q-1.05-1.875-2.9-2.937T9 15t-4 1.063T2.1 19");
}
</style><path class="hcvnnbwln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:contact-mail-sharp"} {...others} />);
}

export default Component;
