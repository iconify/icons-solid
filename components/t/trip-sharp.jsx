import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jbr38ov7b {
  fill: currentColor;
  d: path("M17 20V7h4v13zM10 7h4V5h-4zM8 20V7h1V4h6v3h1v13zm-5 0V7h4v13z");
}
</style><path class="jbr38ov7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:trip-sharp"} {...others} />);
}

export default Component;
