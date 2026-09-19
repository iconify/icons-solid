import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.srk9s2h0i {
  fill: currentColor;
  d: path("M3 21h8V3H3zM21 3h-8v8h8zm-8 18h8v-8h-8z");
}
</style><path class="srk9s2h0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-auto-awesome-mosaic"} {...others} />);
}

export default Component;
