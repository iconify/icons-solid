import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dauycwk9f {
  fill: currentColor;
  d: path("M10 3c.265 0 .52.105.707.293L12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2 8.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414L10.586 13l-1.293 1.293a.999.999 0 1 0 1.414 1.414L12 14.414l1.293 1.293a.999.999 0 1 0 1.414-1.414L13.414 13l1.293-1.293a.999.999 0 1 0-1.414-1.414Z");
}
</style><path class="dauycwk9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:folder-close-fill-sharp"} {...others} />);
}

export default Component;
