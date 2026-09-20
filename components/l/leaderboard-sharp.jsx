import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wysfd55hw {
  fill: currentColor;
  d: path("M3.77 20V10h4.153v10zm5.96 0V4h4.54v16zm6.347 0v-8h4.154v8z");
}
</style><path class="wysfd55hw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:leaderboard-sharp"} {...others} />);
}

export default Component;
