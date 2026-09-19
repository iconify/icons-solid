import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cx9v3dt8n {
  fill: currentColor;
  d: path("M4 4h7V2H2v9h2zm6 9l-4 5h12l-3-4l-2.03 2.71zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5M22 2h-9v2h7v7h2zm-2 18h-7v2h9v-9h-2zM4 13H2v9h9v-2H4z");
}
</style><path class="cx9v3dt8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-wallpaper"} {...others} />);
}

export default Component;
