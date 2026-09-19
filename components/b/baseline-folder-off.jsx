import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d68u8ybir {
  fill: currentColor;
  d: path("M20 6h-8l-2-2H6.83l14.93 14.93c.15-.28.24-.59.24-.93V8c0-1.1-.9-2-2-2M2.1 2.1L.69 3.51l1.56 1.56c-.15.28-.24.59-.24.93L2 18c0 1.1.9 2 2 2h13.17l3.31 3.31l1.41-1.41z");
}
</style><path class="d68u8ybir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-folder-off"} {...others} />);
}

export default Component;
