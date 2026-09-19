import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hxtd0ebdh {
  fill: currentColor;
  d: path("M3 5v14h18V5zm5.33 12H5V7h3.33zm5.34 0h-3.33v-4h3.33zM19 17h-3.33v-4H19zm0-6h-8.67V7H19z");
}

.l3tv_hzhy {
  fill: currentColor;
  d: path("M8.33 17H5V7h3.33zm5.34 0h-3.33v-4h3.33zM19 17h-3.33v-4H19zm0-6h-8.67V7H19z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="l3tv_hzhy"/><path class="hxtd0ebdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-view-quilt"} {...others} />);
}

export default Component;
