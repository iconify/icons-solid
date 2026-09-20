import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.osvupob-f {
  fill: currentColor;
  d: path("M5.5 20.5a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8.5 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8.5 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4M5.5 12a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8.5 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8.5 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-17-8.5a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8.5 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8.5 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4");
}
</style><path class="osvupob-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:grid-dots-28-regular"} {...others} />);
}

export default Component;
