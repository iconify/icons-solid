import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.egn1wmbzo {
  fill: currentColor;
  d: path("M10 8v8l5-4zm11-5H3v18h18zm-2 16H5V5h14z");
}
</style><path class="egn1wmbzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-slideshow"} {...others} />);
}

export default Component;
