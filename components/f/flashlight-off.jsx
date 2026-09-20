import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yhm1i2bio {
  fill: currentColor;
  d: path("M8.48 21V10.416L2.305 4.239l.708-.708l17.284 17.284l-.707.708l-5.108-5.108V21zm-2-16.85V3h10v2.5H7.83zm8 8L8.83 6.5h7.65v1.192l-2 3z");
}
</style><path class="yhm1i2bio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:flashlight-off"} {...others} />);
}

export default Component;
