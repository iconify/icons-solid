import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zqaq_rfck {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 9C2 8.4477 2.4477 8 3 8L7 8L7 3C7 2.4477 7.4477 2 8 2ZM11 7L11 9L18 9L18 7L11 7ZM11 11L11 13L18 13L18 11L11 11ZM11 15L11 17L16 17L16 15L11 15ZM4 10L4 20L7 20L7 10L4 10Z");
}
</style><path clip-rule="evenodd" class="zqaq_rfck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:newspaper-sharp-fill"} {...others} />);
}

export default Component;
