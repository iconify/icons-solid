import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j2zbvkyod {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.56 3.75h8.88q1.951 0 2.925 1.691t-.006 3.379l-4.44 7.647q-.976 1.68-2.919 1.68t-2.919-1.68L4.641 8.82q-.979-1.688-.006-3.379Q5.609 3.75 7.56 3.75");
}
</style><path class="j2zbvkyod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:triangle-down"} {...others} />);
}

export default Component;
