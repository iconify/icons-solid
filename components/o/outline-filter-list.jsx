import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pffl33b1v {
  fill: currentColor;
  d: path("M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z");
}
</style><path class="pffl33b1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-filter-list"} {...others} />);
}

export default Component;
