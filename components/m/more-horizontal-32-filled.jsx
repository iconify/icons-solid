import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.qf2c3kgra {
  fill: currentColor;
  d: path("M7 19a3 3 0 1 0 0-6a3 3 0 0 0 0 6m9 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6m9 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6");
}
</style><path class="qf2c3kgra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:more-horizontal-32-filled"} {...others} />);
}

export default Component;
