import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.t4lxztbub {
  fill: currentColor;
  d: path("M222 160a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M40 102h176a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12");
}
</style><path class="t4lxztbub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:equals-light"} {...others} />);
}

export default Component;
