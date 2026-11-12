import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ls_lu9bae {
  fill: currentColor;
  d: path("M2 17V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m8-4v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0m6 1h4v-1h-1a1 1 0 0 1 0-2h1v-1h-4Z");
}
</style><path class="ls_lu9bae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:security-key-fill-sharp"} {...others} />);
}

export default Component;
