import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lu82cwb9e {
  fill: currentColor;
  d: path("M12 3L4 9v12h16V9zm-2.25 9.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M17 18h-1v-1.5H8V18H7v-7h1v4.5h3.5V12H15c1.1 0 2 .9 2 2z");
}
</style><path class="lu82cwb9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-night-shelter"} {...others} />);
}

export default Component;
