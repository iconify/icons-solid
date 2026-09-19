import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ys0xw46sh {
  fill: currentColor;
  d: path("M23 4H1v16h21.99zm-4 14H5V6h14z");
}
</style><path class="ys0xw46sh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-tablet"} {...others} />);
}

export default Component;
