import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q5ecphbrw {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-3.663 3.049-6.231Q7.791 3.25 12 3.25t7.201 2.519Q22.25 8.337 22.25 12t-3.049 6.231Q16.209 20.75 12 20.75t-7.201-2.519Q1.75 15.663 1.75 12M9 6.5q-4 0-4 4t4 4t4-4t-4-4m3.5 8.5q0 2 3 2t3-2t-3-2t-3 2");
}
</style><path class="q5ecphbrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:animal-cell-detailed"} {...others} />);
}

export default Component;
