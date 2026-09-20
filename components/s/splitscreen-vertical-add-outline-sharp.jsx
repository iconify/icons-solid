import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ewg8vebyg {
  fill: currentColor;
  d: path("M19 5h-4.025h.125h-.1zm-6-2h8v12h-2V5h-4v16h-2zM3 21V3h8v18zM9 5H5v14h4zm0 0H5zm10 18v-2h-2v-2h2v-2h2v2h2v2h-2v2z");
}
</style><path class="ewg8vebyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:splitscreen-vertical-add-outline-sharp"} {...others} />);
}

export default Component;
