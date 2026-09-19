import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fis-ukiiq {
  fill: currentColor;
  d: path("M21.05 4H6.83l7.97 7.97zM2.81 2.81L1.39 4.22L10 13v7h4v-3.17l5.78 5.78l1.41-1.42z");
}
</style><path class="fis-ukiiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-filter-alt-off"} {...others} />);
}

export default Component;
