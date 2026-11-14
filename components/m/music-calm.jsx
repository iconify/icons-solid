import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tjgwfrbpq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.75 12.877V11.5q0-3.417 2.416-5.834T12 3.25t5.834 2.416Q20.25 8.083 20.25 11.5v1.183q1 .659 1 2.317v3q0 2.75-2.75 2.75T15.75 18v-3q0-2.75 2.75-2.75q.128 0 .25.006V11.5q0-2.796-1.977-4.773T12 4.75T7.227 6.727T5.25 11.5v.76q.123-.01.25-.01q2.75 0 2.75 2.75v3q0 2.75-2.75 2.75T2.75 18v-3q0-1.139.805-1.945q.095-.094.195-.178");
}
</style><path class="tjgwfrbpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:music-calm"} {...others} />);
}

export default Component;
