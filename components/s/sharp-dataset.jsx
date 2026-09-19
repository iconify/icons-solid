import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oio230l4t {
  fill: currentColor;
  d: path("M21 3H3v18h18zM11 17H7v-4h4zm0-6H7V7h4zm6 6h-4v-4h4zm0-6h-4V7h4z");
}
</style><path class="oio230l4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-dataset"} {...others} />);
}

export default Component;
