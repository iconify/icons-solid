import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uno3mobji {
  fill: currentColor;
  d: path("M2 4v16h7v-2H4v-6h18V4zm18 4H4V6h16zm-5.07 11.17l-2.83-2.83l-1.41 1.41L14.93 22L22 14.93l-1.41-1.41z");
}
</style><path class="uno3mobji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-credit-score"} {...others} />);
}

export default Component;
