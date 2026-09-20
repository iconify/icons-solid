import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wu02bbdhv {
  fill: currentColor;
  d: path("M7 21H5q-.825 0-1.412-.587T3 19v-7q0-1.875.713-3.512t1.924-2.85t2.85-1.925T12 3t3.513.713t2.85 1.924t1.925 2.85T21 12v7q0 .825-.587 1.413T19 21h-2q-.825 0-1.412-.587T15 19v-4q0-.825.588-1.412T17 13h2v-1q0-2.925-2.037-4.962T12 5T7.038 7.038T5 12v1h2q.825 0 1.413.588T9 15v4q0 .825-.587 1.413T7 21");
}
</style><path class="wu02bbdhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:headphones-rounded"} {...others} />);
}

export default Component;
