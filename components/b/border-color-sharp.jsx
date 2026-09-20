import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.osw3g-k7q {
  fill: currentColor;
  d: path("M2 24v-4h20v4zm2-6v-4.25l12.625-12.6l4.2 4.275L8.25 18zM16.6 6.8L18 5.4L16.6 4l-1.4 1.4z");
}
</style><path class="osw3g-k7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:border-color-sharp"} {...others} />);
}

export default Component;
