import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t6fro80bd {
  fill: currentColor;
  d: path("M20 19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8c0-1.039.578-1.992 1.293-2.707l2-2C8.008 2.578 8.961 2 10 2h7a3 3 0 0 1 3 3ZM11 7a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0Zm3 0a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0Zm3 3V7a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0");
}
</style><path class="t6fro80bd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sd-card-fill"} {...others} />);
}

export default Component;
