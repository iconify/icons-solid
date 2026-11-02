import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.caz71cbkh {
  fill: currentColor;
  d: path("M19.12 8.608a4 4 0 0 1 0 6.784l-8 5A4.001 4.001 0 0 1 5 17V7a4 4 0 0 1 6.12-3.392Z");
}
</style><path class="caz71cbkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:play-fill-round"} {...others} />);
}

export default Component;
