import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u2hc5bcan {
  fill: currentColor;
  d: path("M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z");
}
</style><path class="u2hc5bcan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-outward-outline"} {...others} />);
}

export default Component;
