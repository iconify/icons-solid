import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qr3glibor {
  fill: currentColor;
  d: path("M11.67 3.87L9.9 2.1L0 12l9.9 9.9l1.77-1.77L3.54 12z");
}
</style><path class="qr3glibor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-arrow-back-ios"} {...others} />);
}

export default Component;
