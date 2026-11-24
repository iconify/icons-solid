import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f02qmfbxb {
  fill: currentColor;
  d: path("M6 8h1V7a5 5 0 0 1 10 0v1h1a3 3 0 0 1 3 3a1 1 0 0 1-1 1h-7a.997.997 0 0 0-1 1v8a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3m9 0V7a3 3 0 1 0-6 0v1Zm6 8a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2Z");
}
</style><path class="f02qmfbxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-minus-corner-fill"} {...others} />);
}

export default Component;
