import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a92gt-0nr {
  fill: currentColor;
  d: path("m16.707 2.293l5 5A1 1 0 0 1 22 8v10a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h3V9h-4a1 1 0 0 1-1-1V4h-4a1 1 0 0 1 0-2h5c.265 0 .52.105.707.293M8 5c.265 0 .52.105.707.293l5 5A1 1 0 0 1 14 11v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 .414V7h1.586ZM8 11h4L8 7Z");
}
</style><path class="a92gt-0nr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:files-fill-sharp"} {...others} />);
}

export default Component;
