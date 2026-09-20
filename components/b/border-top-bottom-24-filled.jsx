import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eau1vob4t {
  fill: currentColor;
  d: path("M4 7a1 1 0 0 1-1-1a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3a1 1 0 1 1-2 0a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1a1 1 0 0 1-1 1m1 4a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm14 0a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zM3 18a1 1 0 1 1 2 0a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1a1 1 0 1 1 2 0a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3");
}
</style><path class="eau1vob4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:border-top-bottom-24-filled"} {...others} />);
}

export default Component;
