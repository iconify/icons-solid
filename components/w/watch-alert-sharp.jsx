import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jcv9f7qel {
  fill: currentColor;
  d: path("m9 22l-1.35-4.55q-1.2-.95-1.925-2.375T5 12t.725-3.075T7.65 6.55L9 2h6l1.35 4.55q1.2.95 1.925 2.375T19 12t-.725 3.075t-1.925 2.375L15 22zm6.538-6.462Q17 14.075 17 12t-1.463-3.537T12 7T8.463 8.463T7 12t1.463 3.538T12 17t3.538-1.463M11 12.5h2v-4h-2zm0 3v-2h2v2z");
}
</style><path class="jcv9f7qel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:watch-alert-sharp"} {...others} />);
}

export default Component;
