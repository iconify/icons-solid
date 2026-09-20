import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wew3wxbyv {
  fill: currentColor;
  d: path("M4.05 19.95Q2 17.9 2 15t2.05-4.95T9 8t4.95 2.05T16 15t-2.05 4.95T9 22t-4.95-2.05m8.488-1.412Q14 17.075 14 15t-1.463-3.537T9 10t-3.537 1.463T4 15t1.463 3.538T9 20t3.538-1.463M16.95 15.7q.05-.15.05-.325V15q0-3.325-2.337-5.662T9 7h-.375q-.175 0-.325.05q.65-2.2 2.463-3.625T15 2q2.9 0 4.95 2.05T22 9q0 2.425-1.425 4.238T16.95 15.7");
}
</style><path class="wew3wxbyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:masked-transitions-sharp"} {...others} />);
}

export default Component;
