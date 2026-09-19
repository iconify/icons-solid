import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g5hi5oq4a {
  fill: currentColor;
  d: path("M11 18V6l-8.5 6zm.5-6l8.5 6V6z");
}
</style><path class="g5hi5oq4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:fast-rewind"} {...others} />);
}

export default Component;
