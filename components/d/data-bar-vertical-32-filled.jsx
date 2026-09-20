import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.radu1-brl {
  fill: currentColor;
  d: path("M7.5 3A3.5 3.5 0 0 1 11 6.5v19a3.5 3.5 0 1 1-7 0v-19A3.5 3.5 0 0 1 7.5 3m9 6a3.5 3.5 0 0 1 3.5 3.5v13a3.5 3.5 0 1 1-7 0v-13A3.5 3.5 0 0 1 16.5 9m9 6a3.5 3.5 0 0 1 3.5 3.5v7a3.5 3.5 0 1 1-7 0v-7a3.5 3.5 0 0 1 3.5-3.5");
}
</style><path class="radu1-brl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:data-bar-vertical-32-filled"} {...others} />);
}

export default Component;
