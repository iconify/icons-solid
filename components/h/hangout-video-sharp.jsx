import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ea69yzzpy {
  fill: currentColor;
  d: path("M6 16h8v-3.2l4 3.2V8l-4 3.2V8H6zm-4 4V4h20v16z");
}
</style><path class="ea69yzzpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:hangout-video-sharp"} {...others} />);
}

export default Component;
