import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.gq8-736ea {
  fill: currentColor;
  d: path("M11 3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4h-1V3h-3v3a1 1 0 0 1-1 1H8v3a1 1 0 0 1-1 1H4v3h4v1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3V7a1 1 0 0 1 1-1h3zm2 6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 1-2.5 2.5H10a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3z");
}
</style><path class="gq8-736ea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:steps-20-filled"} {...others} />);
}

export default Component;
