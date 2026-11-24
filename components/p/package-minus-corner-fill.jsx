import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dxsbw9_qu {
  fill: currentColor;
  d: path("m3.106 7.553l1-2C4.643 4.478 5.652 3.001 7 3h10c1.348.001 2.357 1.478 2.894 2.553l1 2A1 1 0 0 1 20 9H5v9a1 1 0 0 0 1 1h2a1 1 0 0 1 0 2H6a3 3 0 0 1-3-3V8c0-.155.036-.308.106-.447M21 15a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Z");
}
</style><path class="dxsbw9_qu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:package-minus-corner-fill"} {...others} />);
}

export default Component;
