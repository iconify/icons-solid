import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h1pc88gbr {
  fill: currentColor;
  d: path("M7 12.539V20.5q0 .213-.144.356T6.499 21t-.356-.144T6 20.5V4.808q0-.343.232-.576T6.808 4h11.89q.218 0 .4.103t.289.267t.126.373t-.087.423l-1.522 3.103l1.522 3.103q.105.214.087.423t-.126.373t-.29.268q-.182.102-.399.102zm0-1h11.416L17.15 8.98q-.17-.333-.17-.712q0-.38.17-.711L18.416 5H7zm0 0V5z");
}
</style><path class="h1pc88gbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:flag-2-outline-rounded"} {...others} />);
}

export default Component;
