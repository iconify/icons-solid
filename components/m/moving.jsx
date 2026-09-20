import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.san7iyz2g {
  fill: currentColor;
  d: path("M3.4 18L2 16.6l5.3-5.3q.875-.875 2.125-.875t2.125.875l1.15 1.15q.3.3.713.3t.712-.3L18.575 8H16V6h6v6h-2V9.425l-4.475 4.45q-.875.875-2.125.875t-2.125-.875L10.1 12.7q-.275-.275-.7-.275t-.7.275z");
}
</style><path class="san7iyz2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:moving"} {...others} />);
}

export default Component;
