import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m2zhhvb8s {
  fill: currentColor;
  d: path("M19 23v-5h-2v-6h5l-1.7 4h2.2zM2 22V2h20v8h-7v8H6z");
}
</style><path class="m2zhhvb8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:quickreply-sharp"} {...others} />);
}

export default Component;
