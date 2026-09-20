import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tr_651qfv {
  fill: currentColor;
  d: path("M14.827 19V6.25H9.904V5H21v1.25h-4.923V19zm-8.865 0v-7.846H3v-1.25h7.154v1.25H7.192V19z");
}
</style><path class="tr_651qfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:format-size-outline"} {...others} />);
}

export default Component;
