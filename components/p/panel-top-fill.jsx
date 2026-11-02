import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.csamymbpu {
  fill: currentColor;
  d: path("M21 18a3 3 0 0 1-3 3H6a3.004 3.004 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3ZM5 18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8H5Z");
}
</style><path class="csamymbpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:panel-top-fill"} {...others} />);
}

export default Component;
