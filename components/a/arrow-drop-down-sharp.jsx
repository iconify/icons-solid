import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vbnz0zbzx {
  fill: currentColor;
  d: path("M12 14.308L8.192 10.5h7.616z");
}
</style><path class="vbnz0zbzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrow-drop-down-sharp"} {...others} />);
}

export default Component;
