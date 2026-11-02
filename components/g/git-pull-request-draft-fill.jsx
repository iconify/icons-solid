import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wx2kf4bcr {
  fill: currentColor;
  d: path("M6 8.829v6.342a3 3 0 1 1-2 0V8.829a3 3 0 1 1 2 0M19.01 5a1 1 0 0 1 0 2H19a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2H19a1 1 0 0 1 0-2ZM16 18a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}
</style><path class="wx2kf4bcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:git-pull-request-draft-fill"} {...others} />);
}

export default Component;
