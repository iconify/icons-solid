import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.und7h4bdh {
  fill: currentColor;
  d: path("M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2m-1 8V6h2v4h3l-4 4l-4-4zm6 7H7v-2h10z");
}
</style><path class="und7h4bdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-download-for-offline"} {...others} />);
}

export default Component;
