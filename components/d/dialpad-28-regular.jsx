import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.kqspalbsl {
  fill: currentColor;
  d: path("M9 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m6.5-12a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m6.5-18a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0");
}
</style><path class="kqspalbsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:dialpad-28-regular"} {...others} />);
}

export default Component;
