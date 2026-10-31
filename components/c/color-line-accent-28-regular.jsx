import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.fgaa-1dri {
  fill: currentColor;
  d: path("M22.251 18.5a2.25 2.25 0 0 1 2.25 2.25v1.5a2.25 2.25 0 0 1-2.25 2.25H5.754a2.25 2.25 0 0 1-2.25-2.25v-1.5a2.25 2.25 0 0 1 1.538-2.134c.07.325.229.63.47.871a1.75 1.75 0 0 0 1.626.47l4.938-1.123q.475-.11.902-.334z");
}
</style><path class="fgaa-1dri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:color-line-accent-28-regular"} {...others} />);
}

export default Component;
