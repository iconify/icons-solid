import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cwsb0xbtz {
  fill: currentColor;
  d: path("M2 17V7h14.25l-1.6 2H4v6h11l-.35 2zm14.675 0l.7-4H14l4.8-6h.525l-.7 4H22l-4.8 6zM4 15V9z");
}
</style><path class="cwsb0xbtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-charging-full-2-outline-sharp"} {...others} />);
}

export default Component;
