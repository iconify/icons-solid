import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m1gj11wiv {
  fill: currentColor;
  d: path("M8.126 5a4 4 0 0 1 7.748 0H17a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm2.141 0h3.466a2 2 0 0 0-3.466 0");
}
</style><path class="m1gj11wiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shopping-bag-fill"} {...others} />);
}

export default Component;
