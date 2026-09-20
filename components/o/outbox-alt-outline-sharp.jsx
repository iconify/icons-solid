import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xa6gw6bst {
  fill: currentColor;
  d: path("M7 16.539L16.577 12L7 7.462zM8 15v-2l3-1l-3-1V9l6.5 3zm-4 5V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="xa6gw6bst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:outbox-alt-outline-sharp"} {...others} />);
}

export default Component;
