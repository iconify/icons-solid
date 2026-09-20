import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.lkvbfykiq {
  fill: currentColor;
  d: path("M16 3a1 1 0 0 1 1 1v21.586l8.293-8.293a1 1 0 0 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-10-10a1 1 0 1 1 1.414-1.414L15 25.586V4a1 1 0 0 1 1-1");
}
</style><path class="lkvbfykiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-down-32-regular"} {...others} />);
}

export default Component;
