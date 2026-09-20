import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.e9gj4rbys {
  fill: currentColor;
  d: path("M6 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6");
}
</style><path class="e9gj4rbys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:circle-12-regular"} {...others} />);
}

export default Component;
