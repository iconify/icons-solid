import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t7zedfgwr {
  fill: currentColor;
  d: path("M16 21v-6H6V6.8L4.4 8.4L3 7l4-4l4 4l-1.4 1.4L8 6.8V13h10v8z");
}
</style><path class="t7zedfgwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:turn-sharp-left-sharp"} {...others} />);
}

export default Component;
