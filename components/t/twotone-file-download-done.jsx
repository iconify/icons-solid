import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a-qgjebdn {
  fill: currentColor;
  d: path("M20.13 5.41L18.72 4l-9.19 9.19l-4.25-4.24l-1.41 1.41l5.66 5.66zM5 18h14v2H5z");
}
</style><path class="a-qgjebdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-file-download-done"} {...others} />);
}

export default Component;
