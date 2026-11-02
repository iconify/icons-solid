import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cw0ourbyr {
  fill: currentColor;
  d: path("M6 12V4a1 1 0 0 1 1-1h5a5 5 0 0 1 4.646 3.153a4.99 4.99 0 0 1-1.21 5.479A5.002 5.002 0 0 1 13 21H7a1 1 0 0 1-1-1Zm2 1v6h5a3 3 0 1 0 0-6Zm4-2a3 3 0 1 0 0-6H8v6Z");
}
</style><path class="cw0ourbyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-b-fill"} {...others} />);
}

export default Component;
