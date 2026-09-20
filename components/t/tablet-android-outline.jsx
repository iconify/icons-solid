import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j1drvzbsn {
  fill: currentColor;
  d: path("M5.616 22q-.672 0-1.144-.472T4 20.385V3.615q0-.67.472-1.143Q4.944 2 5.616 2h12.769q.67 0 1.143.472q.472.472.472 1.144v16.769q0 .67-.472 1.143q-.472.472-1.143.472zM5 17.538v2.846q0 .27.173.443t.443.173h12.769q.269 0 .442-.173t.173-.443v-2.846zm5.23 2.116h3.54v-.77h-3.54zM5 16.538h14V5.5H5zM5 4.5h14v-.885q0-.269-.173-.442T18.385 3H5.615q-.269 0-.442.173T5 3.616zm0 0V3zm0 13.039V21z");
}
</style><path class="j1drvzbsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tablet-android-outline"} {...others} />);
}

export default Component;
