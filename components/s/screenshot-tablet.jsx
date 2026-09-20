import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vogez0b5f {
  fill: currentColor;
  d: path("M3 20q-.825 0-1.412-.587T1 18V6q0-.825.588-1.412T3 4h18q.825 0 1.413.588T23 6v12q0 .825-.587 1.413T21 20zm3-2h12V6H6zm7-1h4v-4h-1.5v2.5H13zm-6-6h1.5V8.5H11V7H7z");
}
</style><path class="vogez0b5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:screenshot-tablet"} {...others} />);
}

export default Component;
