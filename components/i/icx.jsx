import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lj-3luk_x {
  fill: var(--svg-color--35b7ba, #35b7ba);
  d: path("m17.92 7.533l-1.946 1.955a4.729 4.729 0 0 1-6.529 6.529L7.49 17.964A7.446 7.446 0 0 0 17.92 7.533m-10.667 4.5a4.728 4.728 0 0 1 7.175-4.059l1.963-1.963A7.445 7.445 0 0 0 5.969 16.434l1.963-1.955a4.7 4.7 0 0 1-.688-2.447zm12.067-5.76a1.636 1.636 0 1 0 .086-3.271a1.636 1.636 0 0 0-.086 3.271M4.594 21a1.638 1.638 0 0 0 1.185-2.81a1.635 1.635 0 0 0-2.315.031A1.637 1.637 0 0 0 4.594 21");
}
</style><path class="lj-3luk_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:icx"} {...others} />);
}

export default Component;
