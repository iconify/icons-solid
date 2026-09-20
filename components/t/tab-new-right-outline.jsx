import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uh1vafurh {
  fill: currentColor;
  d: path("M5 19V5zv-.025zm0 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v8.35q-.475-.175-.975-.262T19 13V5H5v14h8q0 .525.088 1.025t.262.975zm14 2l-1.4-1.4l1.575-1.6H15v-2h4.175L17.6 16.4L19 15l4 4zm-8-6h2v-4h4v-2h-4V7h-2v4H7v2h4z");
}
</style><path class="uh1vafurh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tab-new-right-outline"} {...others} />);
}

export default Component;
