import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hxlnzlbbu {
  fill: currentColor;
  d: path("m12.7 15.8l2.45-2.45q.25-.25.125-.55t-.475-.3H9.2q-.35 0-.475.3t.125.55l2.45 2.45q.3.3.7.3t.7-.3M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-11v9h14v-9z");
}
</style><path class="hxlnzlbbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:top-panel-open-rounded"} {...others} />);
}

export default Component;
