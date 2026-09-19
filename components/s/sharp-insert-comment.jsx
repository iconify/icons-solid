import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oaun0fbwx {
  fill: currentColor;
  d: path("M22 2H2v16h16l4 4zm-4 12H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z");
}
</style><path class="oaun0fbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-insert-comment"} {...others} />);
}

export default Component;
