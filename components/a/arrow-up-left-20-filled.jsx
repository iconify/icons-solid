import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.yqoch0btr {
  fill: currentColor;
  d: path("M12 3.75a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0V5.56l11.219 11.22a.75.75 0 0 0 1.06-1.062L5.561 4.5h5.689a.75.75 0 0 0 .75-.75");
}
</style><path class="yqoch0btr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-up-left-20-filled"} {...others} />);
}

export default Component;
