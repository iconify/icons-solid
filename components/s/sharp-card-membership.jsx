import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i-id84bjr {
  fill: currentColor;
  d: path("M22 2H2v15h6v5l4-2l4 2v-5h6zm-2 13H4v-2h16zm0-5H4V4h16z");
}
</style><path class="i-id84bjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-card-membership"} {...others} />);
}

export default Component;
