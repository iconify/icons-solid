import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sy-qzsb3v {
  fill: currentColor;
  d: path("M3.23 19.77v-7.231h1v6.23h8.232v1zM7 16V8.77h1V15h8.23v1zm3.77-3.77v-8h10v8zm1-1h8v-4h-8z");
}
</style><path class="sy-qzsb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:dynamic-feed-outline-sharp"} {...others} />);
}

export default Component;
