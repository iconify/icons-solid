import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sajzmmbry {
  fill: currentColor;
  d: path("M21 3H3.01L3 21h18zm-3 11h-4v4h-4v-4H6v-4h4V6h4v4h4z");
}
</style><path class="sajzmmbry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-local-hospital"} {...others} />);
}

export default Component;
