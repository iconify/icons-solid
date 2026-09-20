import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zzj4y4bcm {
  fill: currentColor;
  d: path("M11.289 18.385v-1h8.923v1zm3.961-3.808V7.531l-2.1 2.1l-.708-.708l3.308-3.307l3.308 3.307l-.708.708l-2.1-2.1v7.046zm-11.461 0l3.515-9h.638l3.554 9h-.973l-1.03-2.608H5.765l-1.031 2.608zm2.272-3.408h3.123L7.655 7.15h-.1z");
}
</style><path class="zzj4y4bcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:unknown-7"} {...others} />);
}

export default Component;
