import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ad0u0jetp {
  fill: currentColor;
  d: path("M21 3a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2ZM9 8h6a4 4 0 0 1 0 8H9a4 4 0 0 1 0-8m12 11a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><path class="ad0u0jetp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:distribute-vertical-fill-round"} {...others} />);
}

export default Component;
