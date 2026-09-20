import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p-oz02bnh {
  fill: currentColor;
  d: path("M11.5 19.98v-7.107q-.69 1.433-1.975 2.763T6.527 18.09l-.72-.72q.809-.502 1.795-1.3q.987-.798 1.857-1.845t1.456-2.366T11.5 9V5.94L9.4 8.036l-.708-.708L12 4.019l3.308 3.308l-.708.708l-2.1-2.094v14.04z");
}
</style><path class="p-oz02bnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:ramp-right-outline"} {...others} />);
}

export default Component;
