import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hyh95ecis {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.5 6.25h-9q-2.382 0-4.066 1.684T1.75 12t1.684 4.066T7.5 17.75h9q2.382 0 4.066-1.684T22.25 12t-1.684-4.066T16.5 6.25m1.091 3.781l.377.378q.66.659.66 1.591t-.66 1.591l-.378.378q-.659.66-1.591.66t-1.591-.66l-.378-.378q-.66-.659-.66-1.591t.66-1.591l.378-.378q.659-.66 1.591-.66t1.591.66");
}
</style><path class="hyh95ecis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:component-boolean-prop"} {...others} />);
}

export default Component;
