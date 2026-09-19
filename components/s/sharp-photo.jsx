import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cxpshhbea {
  fill: currentColor;
  d: path("M21 21V3H3v18zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z");
}
</style><path class="cxpshhbea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-photo"} {...others} />);
}

export default Component;
