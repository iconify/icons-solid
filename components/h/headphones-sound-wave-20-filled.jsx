import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.uhk2wob8g {
  fill: currentColor;
  d: path("M10 10a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5m0-8a8 8 0 0 1 8 8v6a2 2 0 0 1-2 2h-.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5H17v-1a7 7 0 1 0-14 0v1h1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H4a2 2 0 0 1-2-2v-6a8 8 0 0 1 8-8M7.5 12a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5");
}
</style><path class="uhk2wob8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:headphones-sound-wave-20-filled"} {...others} />);
}

export default Component;
