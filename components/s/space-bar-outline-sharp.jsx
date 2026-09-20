import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p4qfs0b5c {
  fill: currentColor;
  d: path("M5 14V9h1v4h12V9h1v5z");
}
</style><path class="p4qfs0b5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:space-bar-outline-sharp"} {...others} />);
}

export default Component;
