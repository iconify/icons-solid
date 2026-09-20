import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p9ti8abbd {
  fill: currentColor;
  d: path("M2 10V2h8v8zm2-2h4V4H4zM2 22v-8h8v8zm2-2h4v-4H4zm10-10V2h8v8zm2-2h4V4h-4zm-2 14v-8h8v8zm2-2h4v-4h-4zm0-4");
}
</style><path class="p9ti8abbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-comfy-alt-outline"} {...others} />);
}

export default Component;
