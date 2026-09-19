import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r75uvjn9u {
  fill: currentColor;
  d: path("M20 4H4v16h16zm-2 14H6V6h12z");
}
</style><path class="r75uvjn9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-crop-square"} {...others} />);
}

export default Component;
