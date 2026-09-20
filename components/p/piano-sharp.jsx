import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z-pz2uzsh {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h3.654v-4.808h-1.25V5H5zm10.346 0H19V5h-2.404v9.192h-1.25zM9.54 19h4.923v-4.808h-1.25V5H10.79v9.192H9.54z");
}
</style><path class="z-pz2uzsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:piano-sharp"} {...others} />);
}

export default Component;
