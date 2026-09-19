import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.drfwr0biz {
  fill: currentColor;
  d: path("M22 2H6v16h16zm-9.53 12L9 10.5l1.4-1.41l2.07 2.08L17.6 6L19 7.41zM4 6H2v16h16v-2H4z");
}
</style><path class="drfwr0biz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-library-add-check"} {...others} />);
}

export default Component;
