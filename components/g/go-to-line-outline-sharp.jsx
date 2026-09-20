import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zr62x5iew {
  fill: currentColor;
  d: path("M10.5 7V4h3v3zm0 13v-3h3v3z");
}
</style><path class="zr62x5iew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:go-to-line-outline-sharp"} {...others} />);
}

export default Component;
