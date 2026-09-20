import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wkjb066wf {
  fill: currentColor;
  d: path("M5.5 10.5h3v-3h-3zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="wkjb066wf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:magnification-small-outline-sharp"} {...others} />);
}

export default Component;
