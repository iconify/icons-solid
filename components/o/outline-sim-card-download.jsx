import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d4n4tsb5l {
  fill: currentColor;
  d: path("M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 2v16H6V8.83L10.83 4z");
}

.e226npbrf {
  fill: currentColor;
  d: path("m16 13l-4 4l-4-4l1.41-1.41L11 13.17V9.02L13 9v4.17l1.59-1.59z");
}
</style><path class="d4n4tsb5l"/><path class="e226npbrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-sim-card-download"} {...others} />);
}

export default Component;
