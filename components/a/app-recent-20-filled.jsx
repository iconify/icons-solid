import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ppf2z0bsr {
  fill: currentColor;
  d: path("M7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM2 6a2 2 0 0 1 2-2v12a2 2 0 0 1-2-2zm14 10V4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2");
}
</style><path class="ppf2z0bsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:app-recent-20-filled"} {...others} />);
}

export default Component;
