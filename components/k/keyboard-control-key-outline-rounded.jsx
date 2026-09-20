import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aptcmjbvy {
  fill: currentColor;
  d: path("m12 7.114l-5.265 5.24q-.14.14-.332.134q-.191-.007-.337-.154q-.141-.14-.141-.344t.14-.344l5.37-5.369q.242-.243.565-.243t.566.243l5.388 5.388q.14.14.133.342t-.153.347q-.14.14-.334.14t-.334-.14z");
}
</style><path class="aptcmjbvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:keyboard-control-key-outline-rounded"} {...others} />);
}

export default Component;
