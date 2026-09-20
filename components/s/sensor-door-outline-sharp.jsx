import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v0y-2cwfz {
  fill: currentColor;
  d: path("M4 22V2h16v20zm2-2h12V4H6zm9.5-6.5q.625 0 1.063-.437T17 12t-.437-1.062T15.5 10.5t-1.062.438T14 12t.438 1.063t1.062.437M6 20V4z");
}
</style><path class="v0y-2cwfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sensor-door-outline-sharp"} {...others} />);
}

export default Component;
