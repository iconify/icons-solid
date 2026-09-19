import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ot8b6ybzx {
  fill: currentColor;
  d: path("M16 10h3V3H5v7h3v2H5v9h2v-3h10v3h2v-9h-3zM7 8V5h10v3zm10 8H7v-2h10zm-3-4h-4v-2h4z");
}
</style><path class="ot8b6ybzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-chair-alt"} {...others} />);
}

export default Component;
