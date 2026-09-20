import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oguy3mb8q {
  fill: currentColor;
  d: path("M6 18h3.5q.213 0 .356.144t.144.357t-.144.356T9.5 19H5.808q-.343 0-.576-.232T5 18.192V14.5q0-.213.144-.356T5.501 14t.356.144T6 14.5zM6 6v3.5q0 .213-.144.356T5.499 10t-.356-.144T5 9.5V5.808q0-.343.232-.576T5.808 5H9.5q.213 0 .356.144t.144.357t-.144.356T9.5 6zm12 0h-3.5q-.213 0-.356-.144T14 5.499t.144-.356T14.5 5h3.692q.344 0 .576.232t.232.576V9.5q0 .213-.144.356t-.357.144t-.356-.144T18 9.5zm-1 12h-2q-.213 0-.356-.144t-.144-.357t.144-.356T15 17h2v-2q0-.213.144-.356t.357-.144t.356.144T18 15v2h2q.213 0 .356.144t.144.357t-.144.356T20 18h-2v2q0 .213-.144.356t-.357.144t-.356-.144T17 20z");
}
</style><path class="oguy3mb8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:screenshot-region-outline-rounded"} {...others} />);
}

export default Component;
