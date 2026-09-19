import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xoml00bat {
  fill: currentColor;
  d: path("M18 14v-2h-6v6h6v-2l2 1.06v-4.12zM12 3L4 9v12h16v-2H6v-9l6-4.5l6 4.5v1h2V9z");
}
</style><path class="xoml00bat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-camera-outdoor"} {...others} />);
}

export default Component;
