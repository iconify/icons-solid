import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zhypfks-j {
  fill: currentColor;
  d: path("M7.289 15.27L4 11.98l3.289-3.288l.713.708l-2.08 2.1h12.157l-2.056-2.1l.689-.688L20 12l-3.288 3.288l-.689-.688l2.056-2.1H5.902l2.075 2.08z");
}
</style><path class="zhypfks-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:width"} {...others} />);
}

export default Component;
