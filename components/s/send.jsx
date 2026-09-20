import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l0773wboh {
  fill: currentColor;
  d: path("M3 20v-6l8-2l-8-2V4l19 8z");
}
</style><path class="l0773wboh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:send"} {...others} />);
}

export default Component;
