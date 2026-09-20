import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o6wrurboj {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v7h-2V5H5v14h7v2zm9 0v-2h3.6L8.3 9.7l1.4-1.4l9.3 9.275V14h2v7z");
}
</style><path class="o6wrurboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:open-in-new-down-outline"} {...others} />);
}

export default Component;
