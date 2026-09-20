import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.al9rxtcrk {
  fill: currentColor;
  d: path("M4 22q-.825 0-1.412-.587T2 20V6q0-.825.588-1.412T4 4h4l4-4l4 4h4q.825 0 1.413.588T22 6v14q0 .825-.587 1.413T20 22zm0-2h16V6H4zm2-2V8h12v10z");
}
</style><path class="al9rxtcrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-frames"} {...others} />);
}

export default Component;
