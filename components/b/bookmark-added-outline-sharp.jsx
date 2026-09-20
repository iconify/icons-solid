import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x9f2elbrv {
  fill: currentColor;
  d: path("M17.825 9L15 6.175l1.4-1.425l1.425 1.425l3.525-3.55l1.425 1.425zM12 18l-7 3V3h8v2H7v12.95l5-2.15l5 2.15V11h2v10zM7 5h6z");
}
</style><path class="x9f2elbrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bookmark-added-outline-sharp"} {...others} />);
}

export default Component;
