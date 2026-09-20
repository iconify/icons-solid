import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vrpij_iea {
  fill: currentColor;
  d: path("M8.1 5.3q-.3-.3-.3-.7t.3-.7l1.325-1.325q.275-.275.638-.425t.762-.15H18q.825 0 1.413.588T20 4v10.775q0 .675-.612.925t-1.088-.225zM6 22q-.825 0-1.412-.587T4 20V8.825q0-.4.15-.762t.425-.638L4.6 7.4L1.4 4.2q-.3-.3-.287-.7t.312-.7q.3-.275.7-.287t.7.287L21.2 21.175q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3L15.2 18l1.425-1.4L20 19.975V20q0 .825-.587 1.413T18 22z");
}
</style><path class="vrpij_iea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:no-sim-rounded"} {...others} />);
}

export default Component;
