import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c7m6o1ihg {
  fill: currentColor;
  d: path("M14.175 19.825Q13 18.65 13 17t1.175-2.825T17 13t2.825 1.175T21 17t-1.175 2.825T17 21t-2.825-1.175m-10-3Q3 15.65 3 14t1.175-2.825T7 10t2.825 1.175T11 14t-1.175 2.825T7 18t-2.825-1.175m4-8Q7 7.65 7 6t1.175-2.825T11 2t2.825 1.175T15 6t-1.175 2.825T11 10T8.175 8.825");
}
</style><path class="c7m6o1ihg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:scatter-plot-rounded"} {...others} />);
}

export default Component;
