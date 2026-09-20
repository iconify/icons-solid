import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b8adwbbyw {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h3V6H4zm13 0h3V6h-3z");
}
</style><path class="b8adwbbyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:width-wide-sharp"} {...others} />);
}

export default Component;
