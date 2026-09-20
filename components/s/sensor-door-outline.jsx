import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yso0yo6pz {
  fill: currentColor;
  d: path("M4 22V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v18zm2-2h12V4H6zm9.5-6.5q.625 0 1.063-.437T17 12t-.437-1.062T15.5 10.5t-1.062.438T14 12t.438 1.063t1.062.437M6 20V4z");
}
</style><path class="yso0yo6pz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sensor-door-outline"} {...others} />);
}

export default Component;
