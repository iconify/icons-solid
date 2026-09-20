import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vi-tg0bdw {
  fill: currentColor;
  d: path("M2 20V4h20v7h-2V6H4v12h11v2Zm15 0v-7h5v7Zm-5-8Z");
}
</style><path class="vi-tg0bdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:float-landscape-outline-sharp"} {...others} />);
}

export default Component;
