import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ktc1i6_4n {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.5 12q0-3.107 2.197-5.303Q8.893 4.5 12 4.5t5.303 2.197T19.5 12t-2.197 5.303Q15.107 19.5 12 19.5t-5.303-2.197Q4.5 15.107 4.5 12");
}
</style><path class="ktc1i6_4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:compass-rose"} {...others} />);
}

export default Component;
