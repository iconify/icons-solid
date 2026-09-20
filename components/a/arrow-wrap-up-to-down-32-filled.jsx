import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.wna675bid {
  fill: currentColor;
  d: path("M6.75 3c-.69 0-1.25.56-1.25 1.25v19a5.75 5.75 0 0 0 11.5 0V8.75a3.25 3.25 0 0 1 6.5 0v16.982l-.866-.866a1.25 1.25 0 0 0-1.768 1.768l3 3a1.25 1.25 0 0 0 1.768 0l3-3a1.25 1.25 0 0 0-1.768-1.768l-.866.866V8.75a5.75 5.75 0 0 0-11.5 0v14.5a3.25 3.25 0 0 1-6.5 0v-19C8 3.56 7.44 3 6.75 3");
}
</style><path class="wna675bid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-wrap-up-to-down-32-filled"} {...others} />);
}

export default Component;
