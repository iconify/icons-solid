import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ng2939b1r {
  fill: currentColor;
  d: path("M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z");
}
</style><path class="ng2939b1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:minus"} {...others} />);
}

export default Component;
