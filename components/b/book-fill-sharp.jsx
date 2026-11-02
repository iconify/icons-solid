import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ef6mznbcp {
  fill: currentColor;
  d: path("M4 19V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-1v3a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3m3-1a1 1 0 0 0 0 2h9v-2Z");
}
</style><path class="ef6mznbcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:book-fill-sharp"} {...others} />);
}

export default Component;
