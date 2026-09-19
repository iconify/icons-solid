import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s8shq4bfo {
  fill: currentColor;
  d: path("M13 15V9h-1l-2 1v1h1.5v4zm6-2h-2v4H7v-3l-4 4l4 4v-3h12zM17 2v3H5v6h2V7h10v3l4-4z");
}
</style><path class="s8shq4bfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-repeat-one"} {...others} />);
}

export default Component;
