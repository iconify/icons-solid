import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oxt89abcn {
  fill: currentColor;
  d: path("M4 15v-2h10v2zm0-4V9h16v2z");
}
</style><path class="oxt89abcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:short-text-sharp"} {...others} />);
}

export default Component;
