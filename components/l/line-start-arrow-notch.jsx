import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.brmof2bgs {
  fill: currentColor;
  d: path("M11.808 16.827L4.212 12l7.596-4.827L9.402 11.5H21.5v1H9.402z");
}
</style><path class="brmof2bgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:line-start-arrow-notch"} {...others} />);
}

export default Component;
