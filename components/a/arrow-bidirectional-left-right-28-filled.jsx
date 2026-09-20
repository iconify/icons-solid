import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.mi-08xbjt {
  fill: currentColor;
  d: path("M10.707 7.295a1 1 0 0 1 0 1.414l-4.293 4.293h15.172l-4.293-4.293a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.415l4.293-4.292H6.414l4.293 4.292a1 1 0 0 1-1.414 1.415l-6-6a1 1 0 0 1 0-1.415l6-6a1 1 0 0 1 1.414 0");
}
</style><path class="mi-08xbjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-bidirectional-left-right-28-filled"} {...others} />);
}

export default Component;
