import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xiey5-55o {
  fill: currentColor;
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5Zm6 0v10a1 1 0 0 0 2 0v-3h2a4 4 0 0 0 0-8H9a1 1 0 0 0-1 1m2 5V8h2a1.999 1.999 0 0 1 1.732 3c-.357.619-1.017 1-1.732 1Z");
}
</style><path class="xiey5-55o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-parking-fill-round"} {...others} />);
}

export default Component;
