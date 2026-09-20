import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gwrh72bcm {
  fill: currentColor;
  d: path("m235.24 130.34l-52 72a4 4 0 0 1-6.48 0L76 62.83l-48.76 67.51a4 4 0 1 1-6.48-4.68l52-72a4 4 0 0 1 6.48 0L180 193.17l48.76-67.51a4 4 0 0 1 6.48 4.68");
}
</style><path class="gwrh72bcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:wave-triangle-thin"} {...others} />);
}

export default Component;
