import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yw6av6bjx {
  fill: currentColor;
  d: path("m17.17 11l-1.58 1.59L17 14l4-4l-4-4l-1.41 1.41L17.17 9H7v11h2v-9z");
}
</style><path class="yw6av6bjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-turn-right"} {...others} />);
}

export default Component;
