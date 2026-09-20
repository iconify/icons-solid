import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u52u4h80x {
  fill: currentColor;
  d: path("M6 22V2h12v20zm2-2h8V4H8zm0 0V4z");
}
</style><path class="u52u4h80x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:crop-2-3-outline-sharp"} {...others} />);
}

export default Component;
