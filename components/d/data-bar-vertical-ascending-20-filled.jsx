import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.kj72z7b2g {
  fill: currentColor;
  d: path("M15 3a2 2 0 0 1 2 2v10a2 2 0 1 1-4 0V5a2 2 0 0 1 2-2m-5 3a2 2 0 0 1 2 2v7a2 2 0 1 1-4 0V8a2 2 0 0 1 2-2M5 9a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2");
}
</style><path class="kj72z7b2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:data-bar-vertical-ascending-20-filled"} {...others} />);
}

export default Component;
