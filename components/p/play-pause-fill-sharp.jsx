import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tmp7l7btt {
  fill: currentColor;
  d: path("m3.514 5.143l10 6a.997.997 0 0 1 0 1.714l-10 6A.997.997 0 0 1 2 18V6a1 1 0 0 1 1.514-.857M18 18a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0Z");
}
</style><path class="tmp7l7btt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:play-pause-fill-sharp"} {...others} />);
}

export default Component;
