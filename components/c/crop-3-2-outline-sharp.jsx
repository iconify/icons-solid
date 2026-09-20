import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.klxs3jbia {
  fill: currentColor;
  d: path("M4 17V7h16v10zm1-1h14V8H5zm0 0V8z");
}
</style><path class="klxs3jbia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:crop-3-2-outline-sharp"} {...others} />);
}

export default Component;
