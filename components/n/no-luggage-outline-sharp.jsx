import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fmxknfi0w {
  fill: currentColor;
  d: path("m19 16.125l-2-2V8h-6.125L9 6.125V2h6v4h4zM15 9v3.125l-2-2V9zm-4-3h2V4h-2zM5 21V6.4l2 2V19h10v-.6l2 2v.6h-2v1h-2v-1H9v1H7v-1zm4-3v-7.6l2 2V18zm4-3.6l2 2V18h-2zm7.475 8.9L.675 3.5L2.1 2.075l19.8 19.8zM11.6 14.4");
}
</style><path class="fmxknfi0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:no-luggage-outline-sharp"} {...others} />);
}

export default Component;
