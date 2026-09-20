import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n1hsy2bza {
  fill: currentColor;
  d: path("M10.923 17.039V6.961H21v10.077zm1-1H20V7.96h-8.077zm-4.961 1v-1.231h1.23v1.23zm0-8.847v-1.23h1.23v1.23zM3 17.038v-1.23h1.23v1.23zm0-4.423v-1.23h1.23v1.23zm0-4.423v-1.23h1.23v1.23zM15.962 12");
}
</style><path class="n1hsy2bza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:move-selection-right-outline-sharp"} {...others} />);
}

export default Component;
