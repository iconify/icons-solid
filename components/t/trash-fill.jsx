import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mtdk7ac2h {
  fill: currentColor;
  d: path("M17 5h3a1 1 0 0 1 0 2h-1v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4a1 1 0 0 1 0-2h3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3m-3-1h-4a.997.997 0 0 0-1 1h6a.997.997 0 0 0-1-1");
}
</style><path class="mtdk7ac2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:trash-fill"} {...others} />);
}

export default Component;
