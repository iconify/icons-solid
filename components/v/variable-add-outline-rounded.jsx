import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qp39zno0z {
  fill: currentColor;
  d: path("M4.808 16q-.343 0-.576-.23T4 15.2V8.8q0-.34.232-.57T4.808 8h14.384q.344 0 .576.232t.232.576V9.5q0 .213-.144.356t-.357.144t-.356-.144T19 9.5V9H5v6h8.5q.213 0 .356.144t.144.357t-.144.356T13.5 16zM5 15V9zm14 1h-2.5q-.213 0-.356-.144T16 15.499t.144-.356T16.5 15H19v-2.5q0-.213.144-.356t.357-.144t.356.144t.143.356V15h2.5q.213 0 .356.144t.144.357t-.144.356T22.5 16H20v2.5q0 .213-.144.356t-.357.144t-.356-.144T19 18.5z");
}
</style><path class="qp39zno0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:variable-add-outline-rounded"} {...others} />);
}

export default Component;
