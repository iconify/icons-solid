import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fzg72accn {
  fill: currentColor;
  d: path("M20 19V5h-6v14zM4 21v-4h2v2h6V5H6v2H4V3h18v18zm10-9h-2zM4 15v-2H2v-2h2V9h2v2h2v2H6v2z");
}
</style><path class="fzg72accn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:add-column-left-outline-sharp"} {...others} />);
}

export default Component;
