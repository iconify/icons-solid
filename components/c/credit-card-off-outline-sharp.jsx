import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b25o5pbhy {
  fill: currentColor;
  d: path("m21 18.189l-1-1v-5.997h-5.996l-2.385-2.384H20V6H8.812l-1-1H21zM9.766 11.192H4V18h12.573zm11.338 11.339L17.573 19H3V5h2l1 1H4v2.808h3.38l-5.5-5.5l.714-.714l19.223 19.223z");
}
</style><path class="b25o5pbhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:credit-card-off-outline-sharp"} {...others} />);
}

export default Component;
