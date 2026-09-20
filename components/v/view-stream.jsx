import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fmu4-itzh {
  fill: currentColor;
  d: path("M4 18v-5.5h16V18zm0-6.5V6h16v5.5z");
}
</style><path class="fmu4-itzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-stream"} {...others} />);
}

export default Component;
