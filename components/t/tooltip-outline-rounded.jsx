import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s6gin3efo {
  fill: currentColor;
  d: path("M4 18q-.825 0-1.412-.587T2 16V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18h-5.325l-1.85 2.75q-.15.225-.362.338T12 21.2t-.462-.112t-.363-.338L9.325 18zm8 .4l1.6-2.4H20V4H4v12h6.4zm0-8.4");
}
</style><path class="s6gin3efo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tooltip-outline-rounded"} {...others} />);
}

export default Component;
