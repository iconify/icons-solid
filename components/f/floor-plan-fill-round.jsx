import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u_dyzqjqx {
  fill: currentColor;
  d: path("M12 2v7a1 1 0 0 0 2 0V2h3a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22h-3v-9a1 1 0 0 0-2 0v9H7a5 5 0 0 1-5-5v-3h7a1 1 0 0 0 0-2H2V7a5 5 0 0 1 5-5Z");
}
</style><path class="u_dyzqjqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:floor-plan-fill-round"} {...others} />);
}

export default Component;
