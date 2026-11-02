import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gw6890bsf {
  fill: currentColor;
  d: path("M21 6a.997.997 0 0 1 1 1v6a1 1 0 0 1-2 0V9.414l-4.293 4.293a3.826 3.826 0 0 1-5.414 0a1.83 1.83 0 0 0-2.586 0l-4 4a.999.999 0 1 1-1.414-1.414l4-4a3.826 3.826 0 0 1 5.414 0a1.83 1.83 0 0 0 2.586 0L18.586 8H15a1 1 0 0 1 0-2Z");
}
</style><path class="gw6890bsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:trending-up-fill-round"} {...others} />);
}

export default Component;
