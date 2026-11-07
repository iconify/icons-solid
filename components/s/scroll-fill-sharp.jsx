import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.apch1ebsp {
  fill: currentColor;
  d: path("M18 2a1 1 0 0 1 1 1v13h1a2 2 0 0 1 2 2v1a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9H4a2 2 0 0 1-2-2V5a3 3 0 0 1 3-3ZM6 6V5a1 1 0 0 0-2 0v1a1 1 0 0 0 2 0m7 12a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z");
}
</style><path class="apch1ebsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:scroll-fill-sharp"} {...others} />);
}

export default Component;
