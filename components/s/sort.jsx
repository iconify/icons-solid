import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yzsm6qbis {
  fill: currentColor;
  d: path("M3 18h6v-2H3zM3 6v2h18V6zm0 7h12v-2H3z");
}
</style><path class="yzsm6qbis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sort"} {...others} />);
}

export default Component;
