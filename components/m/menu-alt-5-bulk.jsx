import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rha5-6c-d {
  fill: currentColor;
  d: path("M19 6a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm-6 5a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z");
}
</style><path class="rha5-6c-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:menu-alt-5-bulk"} {...others} />);
}

export default Component;
