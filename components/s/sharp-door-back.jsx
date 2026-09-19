import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jiu1upb9y {
  fill: currentColor;
  d: path("M19 19V3H5v16H3v2h18v-2zm-8-6H9v-2h2z");
}
</style><path class="jiu1upb9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-door-back"} {...others} />);
}

export default Component;
