import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oo_obbbmc {
  fill: currentColor;
  d: path("M10 21q-.425 0-.712-.288T9 20v-7h6v7q0 .425-.288.713T14 21zM9 11V8H5.2q-.475 0-.775-.35t-.2-.825q.325-1.7 1.688-2.762T9 3h5q.425 0 .713.288T15 4v2l2.55-2.55q.2-.2.488-.325T18.625 3H19q.425 0 .713.287T20 4v6q0 .425-.288.713T19 11h-.375q-.3 0-.587-.125t-.488-.325L15 8v3z");
}
</style><path class="oo_obbbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:hardware-rounded"} {...others} />);
}

export default Component;
