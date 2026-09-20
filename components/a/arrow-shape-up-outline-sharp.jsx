import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nmytzntus {
  fill: currentColor;
  d: path("M8 21v-6H3l9-11l9 11h-5v6zm2-2h4v-6h2.775L12 7.15L7.225 13H10zm2-6");
}
</style><path class="nmytzntus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-shape-up-outline-sharp"} {...others} />);
}

export default Component;
