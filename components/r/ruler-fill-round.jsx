import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s6bfvbm-x {
  fill: currentColor;
  d: path("m13.836 4.421l-.743-.742a3.83 3.83 0 0 1 4.614.614l2 2a3.83 3.83 0 0 1 0 5.414l-8 8a3.83 3.83 0 0 1-5.414 0l-2-2a3.83 3.83 0 0 1-.614-4.614l2.614 2.614a.999.999 0 1 0 1.414-1.414l-.586-.586l-.001-.001L5 11.586L7.586 9l2.707 2.707a.999.999 0 1 0 1.414-1.414L9 7.586L11.586 5l2.707 2.707a.999.999 0 1 0 1.414-1.414Z");
}
</style><path class="s6bfvbm-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ruler-fill-round"} {...others} />);
}

export default Component;
