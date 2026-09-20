import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c0b7ljvkf {
  fill: currentColor;
  d: path("M2 20v-9h2v7h16V6h-9V4h11v16zm15.075-3.5l1.425-1.425L15.4 12H18v-2h-6v6h2v-2.575zM2 9V4h7v5zm10 3");
}
</style><path class="c0b7ljvkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pip-exit-outline-sharp"} {...others} />);
}

export default Component;
