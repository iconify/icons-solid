import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sisfprb3n {
  fill: currentColor;
  d: path("M2 24v-4h20v4zm3.5-7l5.25-14h2.5l5.25 14h-2.4l-1.25-3.6H9.2L7.9 17zm4.4-5.6h4.2l-2.05-5.8h-.1z");
}
</style><path class="sisfprb3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-color-text-sharp"} {...others} />);
}

export default Component;
