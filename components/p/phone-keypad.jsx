import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.um6fzac1t {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 1.75q-2 0-2 2t2 2t2-2t-2-2m4 2q0-2 2-2t2 2t-2 2t-2-2m8-2q-2 0-2 2t2 2t2-2t-2-2M4 9.25q0-2 2-2t2 2t-2 2t-2-2m8-2q-2 0-2 2t2 2t2-2t-2-2m4 2q0-2 2-2t2 2t-2 2t-2-2m-10 3.5q-2 0-2 2t2 2t2-2t-2-2m4 2q0-2 2-2t2 2t-2 2t-2-2m8-2q-2 0-2 2t2 2t2-2t-2-2m-8 7.5q0-2 2-2t2 2t-2 2t-2-2");
}
</style><path class="um6fzac1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:phone-keypad"} {...others} />);
}

export default Component;
