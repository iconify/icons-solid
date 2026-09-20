import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zc3q5nphy {
  fill: currentColor;
  d: path("M19 19V5h1v14zm-7-2.692l-.708-.708l3.1-3.1H4v-1h10.392l-3.1-3.1l.708-.708L16.308 12z");
}
</style><path class="zc3q5nphy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:horizontal-align-right"} {...others} />);
}

export default Component;
