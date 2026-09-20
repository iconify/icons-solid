import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.krb_--bfb {
  fill: currentColor;
  d: path("M17 20V10H7.825l3.6 3.6l-1.4 1.425L4 9l6-6l1.425 1.425L7.825 8H19v12z");
}
</style><path class="krb_--bfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-top-left"} {...others} />);
}

export default Component;
