import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.if7c40z3z {
  fill: currentColor;
  d: path("M4 15q-1.25 0-2.125-.875T1 12t.875-2.125T4 9V5h5q0-1.25.875-2.125T12 2t2.125.875T15 5h5v4q1.25 0 2.125.875T23 12t-.875 2.125T20 15v6H4zm6.063-2.437q.437-.438.437-1.063t-.437-1.062T9 10t-1.062.438T7.5 11.5t.438 1.063T9 13t1.063-.437m6 0q.437-.438.437-1.063t-.437-1.062T15 10t-1.062.438T13.5 11.5t.438 1.063T15 13t1.063-.437M8 17h8v-2H8z");
}
</style><path class="if7c40z3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:smart-toy-sharp"} {...others} />);
}

export default Component;
