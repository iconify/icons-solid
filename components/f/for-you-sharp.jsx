import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eywqghbsv {
  fill: currentColor;
  d: path("M16.225 11.588q2.2-.413 3.775-1.088v10q-1.5.675-3.65 1.088T12 22t-4.35-.413T4 20.5v-10q1.575.675 3.775 1.088T12 12t4.225-.413m-1.4-8.412Q16 4.35 16 6t-1.175 2.825T12 10T9.175 8.825T8 6t1.175-2.825T12 2t2.825 1.175");
}
</style><path class="eywqghbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:for-you-sharp"} {...others} />);
}

export default Component;
