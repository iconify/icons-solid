import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hydbn0byu {
  fill: currentColor;
  d: path("M5 21V4h9l.4 2H20v10h-7l-.4-2H7v7zm9.65-7H18V8h-5.25l-.4-2H7v6h7.25z");
}
</style><path class="hydbn0byu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:flag-outline-sharp"} {...others} />);
}

export default Component;
