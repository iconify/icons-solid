import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wyj2-vfsc {
  fill: currentColor;
  d: path("M17 20V4q.825 0 1.413.588T19 6v12q0 .825-.587 1.413T17 20M4 22q-.825 0-1.412-.587T2 20V4q0-.825.588-1.412T4 2h9q.825 0 1.413.588T15 4v16q0 .825-.587 1.413T13 22zm17-4V6q.625 0 1.063.438T22.5 7.5v9q0 .625-.437 1.063T21 18");
}
</style><path class="wyj2-vfsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:web-stories"} {...others} />);
}

export default Component;
