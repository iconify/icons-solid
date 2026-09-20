import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yrhtr9bqg {
  fill: currentColor;
  d: path("M2 22V2h20v16H6z");
}
</style><path class="yrhtr9bqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chat-bubble-sharp"} {...others} />);
}

export default Component;
