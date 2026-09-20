import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p454zibvy {
  fill: currentColor;
  d: path("m9 19l-7-7l7-7l6 6h7v2h-7z");
}
</style><path class="p454zibvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-start-diamond"} {...others} />);
}

export default Component;
