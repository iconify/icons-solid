import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.krct6gfoo {
  fill: currentColor;
  d: path("m14 17l-5-5l5-5z");
}
</style><path class="krct6gfoo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-left-outline-sharp"} {...others} />);
}

export default Component;
