import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w9szrkb2z {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 1.75h12q1.76 0 3.005 1.245T22.25 6v12q0 1.76-1.245 3.005T18 22.25H6q-1.76 0-3.005-1.245T1.75 18V6q0-1.76 1.245-3.005T6 1.75m2.625 3.5q-3.375 0-3.375 3.375v6.75q0 3.375 3.375 3.375h6.75q3.375 0 3.375-3.375v-6.75q0-3.375-3.375-3.375z");
}
</style><path class="w9szrkb2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:box-model"} {...others} />);
}

export default Component;
