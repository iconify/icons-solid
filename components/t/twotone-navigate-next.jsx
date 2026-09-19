import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p_eprobji {
  fill: currentColor;
  d: path("m10.02 18l6-6l-6-6l-1.41 1.41L13.19 12l-4.58 4.59z");
}
</style><path class="p_eprobji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-navigate-next"} {...others} />);
}

export default Component;
