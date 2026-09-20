import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yhrk7jbue {
  fill: currentColor;
  d: path("M11 21v-6.3q-.825 1.125-1.975 2.138T6.45 18.725L5 17.275q.75-.425 1.775-1.175t1.963-1.787t1.6-2.375T11 9V6.825L9.4 8.4L8 7l4-4l4 4l-1.4 1.4L13 6.825V21z");
}
</style><path class="yhrk7jbue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ramp-right-sharp"} {...others} />);
}

export default Component;
