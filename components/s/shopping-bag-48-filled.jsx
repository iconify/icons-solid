import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jclafvkio {
  fill: currentColor;
  d: path("M14 10a6 6 0 0 1 10-4.472A6 6 0 0 1 34 10v4h3.5a2.5 2.5 0 0 1 2.5 2.5v22.25a5.25 5.25 0 1 1-10.5 0V14h2v-4a3.5 3.5 0 0 0-6.014-2.434A6 6 0 0 1 26 10v4h1v24.75c0 2.025.777 3.87 2.05 5.25H14.5A6.5 6.5 0 0 1 8 37.5v-21a2.5 2.5 0 0 1 2.5-2.5H14zm2.5 4h7v-4a3.5 3.5 0 1 0-7 0z");
}
</style><path class="jclafvkio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:shopping-bag-48-filled"} {...others} />);
}

export default Component;
