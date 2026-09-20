import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rli6xr67k {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h16V6H4zm7-5h8V7h-8zm2-2V9h4v2zm-9 7V6z");
}
</style><path class="rli6xr67k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:picture-in-picture-outline-sharp"} {...others} />);
}

export default Component;
