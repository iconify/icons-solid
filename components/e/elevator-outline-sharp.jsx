import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n4adusb3l {
  fill: currentColor;
  d: path("M7.885 17.5h2v-3.808h1V9.616h-4v4.076h1zm1.753-9.115q.304-.308.304-.753q0-.446-.307-.75t-.753-.305t-.75.307t-.305.753t.308.75t.752.305t.75-.307m4.075 2.115h3.192l-1.596-2.558zm1.596 5.558l1.596-2.558h-3.192zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="n4adusb3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:elevator-outline-sharp"} {...others} />);
}

export default Component;
