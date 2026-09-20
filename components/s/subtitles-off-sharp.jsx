import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c8p901b3q {
  fill: currentColor;
  d: path("M17.423 10.846h-3.92L7.659 5H21v13.342l-6.496-6.496h2.919zm1.935 10.12L17.38 19H3V5h1.616v1.242L2.38 3.99l.708-.708l16.977 16.977zm-12.781-9.12h1v-.815l-.185-.185h-.815zm6.227 2.577H6.577v1h7.227z");
}
</style><path class="c8p901b3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:subtitles-off-sharp"} {...others} />);
}

export default Component;
