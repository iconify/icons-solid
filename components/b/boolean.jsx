import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hcnzgcc6a {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.5 5.75h-9q-2.589 0-4.419 1.831Q1.25 9.411 1.25 12t1.831 4.419T7.5 18.25h9q2.589 0 4.419-1.831Q22.75 14.589 22.75 12t-1.831-4.419Q19.089 5.75 16.5 5.75");
}
</style><path class="hcnzgcc6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:boolean"} {...others} />);
}

export default Component;
