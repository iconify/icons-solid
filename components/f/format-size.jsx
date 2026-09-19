import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uxms23bbn {
  fill: currentColor;
  d: path("M9 4v3h5v12h3V7h5V4zm-6 8h3v7h3v-7h3V9H3z");
}
</style><path class="uxms23bbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:format-size"} {...others} />);
}

export default Component;
