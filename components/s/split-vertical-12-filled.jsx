import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.rmsyu2v2j {
  fill: currentColor;
  d: path("M6 1.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0zm-5 2A1.5 1.5 0 0 1 2.5 2H4v8H2.5A1.5 1.5 0 0 1 1 8.5zM7 10h1.5A1.5 1.5 0 0 0 10 8.5v-5A1.5 1.5 0 0 0 8.5 2H7z");
}
</style><path class="rmsyu2v2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:split-vertical-12-filled"} {...others} />);
}

export default Component;
