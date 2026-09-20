import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n05q3mxvn {
  fill: currentColor;
  d: path("M7 22v-1.5q.9-.625 1.913-.975T11 19.05V17H8v-2h3V9H8.45L8.1 8H4V6.125Q4 4.4 5.15 3.2T8 2h8q1.7 0 2.85 1.2T20 6.125V8h-4.1l-.35 1H13v6h3v2h-3v2.05q1.075.125 2.088.475T17 20.5V22z");
}
</style><path class="n05q3mxvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chair-counter-sharp"} {...others} />);
}

export default Component;
