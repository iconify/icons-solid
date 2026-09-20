import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g56d29jrn {
  fill: currentColor;
  d: path("M3 22V6h3V1h12v5h3v16zM8 6h8V3H8zm4 12.5q1.875 0 3.188-1.312T16.5 14t-1.312-3.187T12 9.5t-3.187 1.313T7.5 14t1.313 3.188T12 18.5m1.15-2.65l.7-.7l-1.35-1.35v-2.3h-1v2.7z");
}
</style><path class="g56d29jrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:punch-clock"} {...others} />);
}

export default Component;
