import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d6vrtlb_x {
  fill: currentColor;
  d: path("m2.904 17l4.192-5.616L10.558 16h2.544l-2.64-3.5l3.634-4.846l7 9.346z");
}
</style><path class="d6vrtlb_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:landscape"} {...others} />);
}

export default Component;
