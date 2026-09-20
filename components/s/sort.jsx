import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cui83ccbj {
  fill: currentColor;
  d: path("M4 17v-1h4.75v1zm0-4.5v-1h10.366v1zM4 8V7h16v1z");
}
</style><path class="cui83ccbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sort"} {...others} />);
}

export default Component;
