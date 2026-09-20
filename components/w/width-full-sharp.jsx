import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nzh7dfb0m {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h1V6H4zm15 0h1V6h-1z");
}
</style><path class="nzh7dfb0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:width-full-sharp"} {...others} />);
}

export default Component;
