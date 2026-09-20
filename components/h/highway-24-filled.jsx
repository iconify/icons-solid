import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vum9n5bwq {
  fill: currentColor;
  d: path("M7.987 3.164a1 1 0 1 0-1.973-.328l-3 18a1 1 0 1 0 1.973.328zm10-.328a1 1 0 0 0-1.973.328l3 18a1 1 0 1 0 1.973-.328zM13 3a1 1 0 0 0-2 0v3a1 1 0 1 0 2 0zm-2 10.5a1 1 0 1 0 2 0v-3a1 1 0 0 0-2 0zm0 4.5a1 1 0 1 1 2 0v3a1 1 0 0 1-2 0z");
}
</style><path class="vum9n5bwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:highway-24-filled"} {...others} />);
}

export default Component;
