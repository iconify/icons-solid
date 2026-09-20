import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z8cbysb0g {
  fill: currentColor;
  d: path("M8 8V5h2v3zm0 9v-5h2v5zm-2 5q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm0-2h12v-9H6zM6 9h12V4H6z");
}
</style><path class="z8cbysb0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:kitchen-outline"} {...others} />);
}

export default Component;
