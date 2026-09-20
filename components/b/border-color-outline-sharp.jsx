import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rjdig4dxm {
  fill: currentColor;
  d: path("M2 24v-4h20v4zm4-8h1.4l7.8-7.775l-.725-.725l-.7-.7L6 14.6zm-2 2v-4.25l12.625-12.6l4.2 4.275L8.25 18zM18 5.4L16.6 4zm-2.8 2.825l-.725-.725l-.7-.7z");
}
</style><path class="rjdig4dxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:border-color-outline-sharp"} {...others} />);
}

export default Component;
