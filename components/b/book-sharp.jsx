import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qf6fnmbaw {
  fill: currentColor;
  d: path("M4 22V2h16v20zm7-11l2.5-1.5L16 11V4h-5z");
}
</style><path class="qf6fnmbaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:book-sharp"} {...others} />);
}

export default Component;
