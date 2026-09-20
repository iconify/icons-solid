import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w8g66ewnt {
  fill: currentColor;
  d: path("m5.962 19.5l-.462-.423L12 4.462l6.5 14.615l-.462.423L12 16.923zM7.1 17.9l4.9-2.1l4.9 2.1l-4.9-11zm4.9-2.1");
}
</style><path class="w8g66ewnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:navigation-outline-sharp"} {...others} />);
}

export default Component;
