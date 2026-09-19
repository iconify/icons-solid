import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gt75jsbzc {
  fill: currentColor;
  d: path("M17 4v18H7V4h3V2h4v2zm-2 2H9v14h6z");
}
</style><path class="gt75jsbzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-battery-0-bar"} {...others} />);
}

export default Component;
