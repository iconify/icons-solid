import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.akkl7mb6j {
  fill: currentColor;
  d: path("M13.077 21v-7.115H21V21h-1v-6.115h-2.461v4.25h-1v-4.25h-2.462V21zm-9.096-1V4H20v7.5H7.73v1h2.962v2.75H7.731v1h2.961V20z");
}
</style><path class="akkl7mb6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:markdown-document-sharp"} {...others} />);
}

export default Component;
