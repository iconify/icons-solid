import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qx6kxve6f {
  fill: currentColor;
  d: path("M7 5.5V3h10v2.5zm5.707 9.209q.293-.291.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293t.709-.291M9 21V10.692l-2-3V6.5h10v1.192l-2 3V21z");
}
</style><path class="qx6kxve6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:flashlight-on-sharp"} {...others} />);
}

export default Component;
