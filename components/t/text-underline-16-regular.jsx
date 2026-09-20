import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.b2n3ruwqs {
  fill: currentColor;
  d: path("M4.5 2a.5.5 0 0 1 .5.5V8c0 1.624 1.376 3 3 3s3-1.376 3-3V2.5a.5.5 0 0 1 1 0V8c0 2.176-1.824 4-4 4s-4-1.824-4-4V2.5a.5.5 0 0 1 .5-.5M4 13.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5");
}
</style><path class="b2n3ruwqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-underline-16-regular"} {...others} />);
}

export default Component;
