import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d8j82fe9x {
  fill: currentColor;
  d: path("M8 8v8zm-1 9V7h10v10zm1-1h8V8H8z");
}
</style><path class="d8j82fe9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stop-outline"} {...others} />);
}

export default Component;
