import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kv_ykcbaa {
  fill: currentColor;
  d: path("M7.038 18.963Q5 16.925 5 14q0-2.35 1.388-4.212t3.637-2.513q-.825-.2-1.437-.712T7.6 5.325T7.075 3.75t-.05-1.725q1.025-.125 1.95.125t1.675.8t1.238 1.325t.587 1.75q.325-.775.863-1.537T15 2.6L16.4 4q-1.075 1.075-1.588 1.825t-.712 1.5q2.2.7 3.55 2.538T19 14q0 2.925-2.037 4.963T12 21t-4.962-2.037");
}
</style><path class="kv_ykcbaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:nutrition-sharp"} {...others} />);
}

export default Component;
