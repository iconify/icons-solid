import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.v41fufb6i {
  fill: currentColor;
  d: path("M10.5 18.5a6 6 0 0 0 6 6H20v1a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 2 25.5v-12A4.5 4.5 0 0 1 6.5 9h4zM25.5 2A4.5 4.5 0 0 1 30 6.5v12a4.5 4.5 0 0 1-4.5 4.5h-9a4.5 4.5 0 0 1-4.5-4.5v-12A4.5 4.5 0 0 1 16.5 2z");
}
</style><path class="v41fufb6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:copy-32-filled"} {...others} />);
}

export default Component;
