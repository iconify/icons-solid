import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bsnt9hser {
  fill: currentColor;
  d: path("M17.51 3.87L15.73 2.1L5.84 12l9.9 9.9l1.77-1.77L9.38 12z");
}
</style><path class="bsnt9hser"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-arrow-back-ios"} {...others} />);
}

export default Component;
