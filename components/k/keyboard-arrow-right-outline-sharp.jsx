import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nvl8vab5v {
  fill: currentColor;
  d: path("M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z");
}
</style><path class="nvl8vab5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:keyboard-arrow-right-outline-sharp"} {...others} />);
}

export default Component;
