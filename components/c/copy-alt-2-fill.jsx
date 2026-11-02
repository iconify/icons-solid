import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.amhq5c_vu {
  fill: currentColor;
  d: path("M11 2h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3a1 1 0 0 1 0-2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-8a.997.997 0 0 0-1 1a1 1 0 0 1-2 0a3 3 0 0 1 3-3m-9 9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z");
}
</style><path class="amhq5c_vu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:copy-alt-2-fill"} {...others} />);
}

export default Component;
