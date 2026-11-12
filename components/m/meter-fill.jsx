import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o96f9ybcv {
  fill: currentColor;
  d: path("M15 3a1 1 0 0 1 2 0h2a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h2a1 1 0 0 1 2 0ZM7 7v3a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0m4 0v3a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0m4 0v3a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0m1 9H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2");
}
</style><path class="o96f9ybcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:meter-fill"} {...others} />);
}

export default Component;
