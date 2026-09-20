import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p8jiiqcba {
  fill: currentColor;
  d: path("M6.5 7.77v-1h11v1zm.9 10.015l-.708-.708L12 11.769l5.308 5.308l-.708.707l-4.6-4.6z");
}
</style><path class="p8jiiqcba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:chevron-line-up"} {...others} />);
}

export default Component;
