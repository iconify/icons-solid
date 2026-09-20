import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aax2cybvw {
  fill: currentColor;
  d: path("M16 15V6.5a1 1 0 0 1 1.993-.117L18 6.5V15a1 1 0 0 1-1.993.117zm-4.707 6.707l-2-2a1 1 0 0 1 1.32-1.497l.094.083L12 19.586l1.293-1.293a1 1 0 0 1 1.497 1.32l-.083.094l-2 2a1 1 0 0 1-1.32.083zM11 15l-.001-11.5a1 1 0 0 1 1.993-.117L13 3.5V15a1 1 0 0 1-1.993.117zm-5 0V6.5a1 1 0 0 1 1.993-.117L8 6.5V15a1 1 0 0 1-1.993.117z");
}
</style><path class="aax2cybvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-indent-decrease-rotate-270-24-filled"} {...others} />);
}

export default Component;
