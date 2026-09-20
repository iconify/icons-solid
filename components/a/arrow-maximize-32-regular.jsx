import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.c69hz9g5c {
  fill: currentColor;
  d: path("M27 4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7.414L7.414 26H15a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1V17a1 1 0 1 1 2 0v7.586L24.586 6H17a1 1 0 1 1 0-2z");
}
</style><path class="c69hz9g5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-maximize-32-regular"} {...others} />);
}

export default Component;
