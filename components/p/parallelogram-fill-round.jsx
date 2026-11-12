import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h4naw7quq {
  fill: currentColor;
  d: path("M17.976 21.217A1 1 0 0 1 17 22H3a1.002 1.002 0 0 1-.976-1.217l4-18A1 1 0 0 1 7 2h14a1.002 1.002 0 0 1 .976 1.217Z");
}
</style><path class="h4naw7quq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:parallelogram-fill-round"} {...others} />);
}

export default Component;
