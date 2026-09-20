import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eiszrwonm {
  fill: currentColor;
  d: path("M3 19V7h6.942l2-2H21v14zm2.114-5.77h6.117V7.115zM4 12.943L8.942 8H4zm0 1.289V18h16V6h-7.77v8.23zm7.5-2.731");
}
</style><path class="eiszrwonm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:files-outline-sharp"} {...others} />);
}

export default Component;
