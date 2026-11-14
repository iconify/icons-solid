import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r4kyl5mxb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14 5q0-3.25 3.25-3.25T20.5 5t-3.25 3.25T14 5m-3.75-.25h-1.5q-2.5 0-2.5 2.5v.5q0 .883.312 1.454q-.574.298-1.067.791Q4.25 11.24 4.25 13v5q0 1.76 1.245 3.005T8.5 22.25h2q1.76 0 3.005-1.245T14.75 18v-5q0-1.76-1.245-3.005q-.54-.541-1.178-.846q.423-.612.423-1.399v-.5q0-1.036-.732-1.768T10.25 4.75");
}
</style><path class="r4kyl5mxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:baby-shampoo"} {...others} />);
}

export default Component;
