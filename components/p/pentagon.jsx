import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h48ovabea {
  fill: currentColor;
  d: path("M6.366 20.5L2.596 9.192L12 2.616l9.404 6.576l-3.77 11.308z");
}
</style><path class="h48ovabea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:pentagon"} {...others} />);
}

export default Component;
