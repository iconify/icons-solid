import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cjzlq2bmw {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18 5.25H6q-1.76 0-3.005 1.245T1.75 9.5v5q0 1.76 1.245 3.005T6 18.75h12q1.76 0 3.005-1.245T22.25 14.5v-5q0-1.76-1.245-3.005T18 5.25M8.5 12q0-3.5 3.5-3.5t3.5 3.5t-3.5 3.5T8.5 12");
}
</style><path class="cjzlq2bmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:salary"} {...others} />);
}

export default Component;
