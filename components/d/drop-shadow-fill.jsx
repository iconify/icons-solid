import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m7i1izl8c {
  fill: currentColor;
  d: path("M5 2h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m14 18a1 1 0 0 0 1-1V7a1 1 0 0 1 2 0v12a3 3 0 0 1-3 3H7a1 1 0 0 1 0-2Z");
}
</style><path class="m7i1izl8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:drop-shadow-fill"} {...others} />);
}

export default Component;
