import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.prl2robnb {
  fill: currentColor;
  d: path("M3 19v-5.577l5-5V4h8v4.423l5 5V19zm1.916-6.116h14.169L15 8.8V5H9v3.8zM4 18h16v-4.115H4zm6-1.608v-.884h4v.884z");
}
</style><path class="prl2robnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:range-hood-outline-sharp"} {...others} />);
}

export default Component;
