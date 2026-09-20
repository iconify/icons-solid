import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aeio-9bcx {
  fill: currentColor;
  d: path("M4 17q-.825 0-1.412-.587T2 15V9q0-.825.588-1.412T4 7h4q.825 0 1.413.588T10 9H4v6h4v-2H6v-2h4v4q0 .825-.587 1.413T8 17zm8 0V7h2v10zm4 0V7h7v2h-5v2h4v2h-4v4z");
}
</style><path class="aeio-9bcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:gif-2"} {...others} />);
}

export default Component;
