import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vuf5x5brn {
  fill: currentColor;
  d: path("M6.087 12.689q1.175-.595 2.428-.892t2.572-.297q.73 0 1.458.09t1.434.29q1.327.37 2.018.495q.692.125 1.5.125h.417l.951-8.5H5.115zM6.027 21L4 3h16l-2.008 18z");
}
</style><path class="vuf5x5brn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:water-medium-sharp"} {...others} />);
}

export default Component;
