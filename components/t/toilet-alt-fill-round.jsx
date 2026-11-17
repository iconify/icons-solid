import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vubpfcbwg {
  fill: currentColor;
  d: path("M19 10H5V7a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5Zm1.918 2a6.01 6.01 0 0 1-5.448 4.982l1.458 3.647A.998.998 0 0 1 16 22H8a1 1 0 0 1-.928-1.371l1.458-3.647A6.01 6.01 0 0 1 3.082 12Z");
}
</style><path class="vubpfcbwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:toilet-alt-fill-round"} {...others} />);
}

export default Component;
