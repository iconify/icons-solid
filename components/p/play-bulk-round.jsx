import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mp6f-bgms {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m11.12 3.608l8 5a4 4 0 0 1 0 6.784l-8 5A4.001 4.001 0 0 1 5 17V7a4 4 0 0 1 6.12-3.392");
}
</style><path class="mp6f-bgms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:play-bulk-round"} {...others} />);
}

export default Component;
