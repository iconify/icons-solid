import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xugrx5b8f {
  fill: currentColor;
  d: path("M3 3v18h18V3zm16 16H5V5h14z");
}
</style><path class="xugrx5b8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-square"} {...others} />);
}

export default Component;
