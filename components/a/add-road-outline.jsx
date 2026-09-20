import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p-96hmbpm {
  fill: currentColor;
  d: path("M18 23v-3h-3v-2h3v-3h2v3h3v2h-3v3zm0-10V4h2v9zM4 20V4h2v16zm7-12V4h2v4zm0 6v-4h2v4zm0 6v-4h2v4z");
}
</style><path class="p-96hmbpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:add-road-outline"} {...others} />);
}

export default Component;
