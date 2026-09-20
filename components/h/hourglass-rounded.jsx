import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kk_opfdtb {
  fill: currentColor;
  d: path("M5.5 21q-.213 0-.356-.144T5 20.499t.144-.356T5.5 20h1.308v-3q0-1.852 1.135-3.285T10.853 12q-1.774-.3-2.91-1.724T6.808 7V4H5.5q-.213 0-.356-.144T5 3.499t.144-.356T5.5 3h13q.213 0 .356.144t.144.357t-.144.356T18.5 4h-1.308v3q0 1.852-1.135 3.276T13.147 12q1.774.28 2.91 1.715q1.135 1.433 1.135 3.285v3H18.5q.213 0 .356.144t.144.357t-.144.356T18.5 21z");
}
</style><path class="kk_opfdtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:hourglass-rounded"} {...others} />);
}

export default Component;
