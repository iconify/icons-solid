import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iabomcb-c {
  fill: currentColor;
  d: path("M6 18v-3h13V6h3v16l-4-4zm-4-1V2h15v11H6z");
}
</style><path class="iabomcb-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:forum-sharp"} {...others} />);
}

export default Component;
