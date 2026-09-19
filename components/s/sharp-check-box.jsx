import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g6-9__5ga {
  fill: currentColor;
  d: path("M21 3H3v18h18zM10 17l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z");
}
</style><path class="g6-9__5ga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-check-box"} {...others} />);
}

export default Component;
