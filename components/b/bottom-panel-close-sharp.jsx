import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x3jdr0bzt {
  fill: currentColor;
  d: path("m12 11.596l3.173-3.192H8.827zM5 15h14V5H5zm-1 5V4h16v16z");
}
</style><path class="x3jdr0bzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bottom-panel-close-sharp"} {...others} />);
}

export default Component;
