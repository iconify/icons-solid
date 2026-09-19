import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e7qrhabmy {
  fill: currentColor;
  d: path("M19 3H5v18l7-3l7 3zm-2 15l-5-2.18L7 18V5h10z");
}
</style><path class="e7qrhabmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-bookmark-border"} {...others} />);
}

export default Component;
