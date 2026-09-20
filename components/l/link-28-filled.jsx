import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.a85f4ccxx {
  fill: currentColor;
  d: path("M11 8a1 1 0 0 1 .117 1.993L11 10H8a4 4 0 0 0-.2 7.995L8 18h3a1 1 0 0 1 .117 1.993L11 20H8a6 6 0 0 1-.225-11.996L8 8zm9 0a6 6 0 0 1 .225 11.996L20 20h-3a1 1 0 0 1-.117-1.993L17 18h3a4 4 0 0 0 .2-7.995L20 10h-3a1 1 0 0 1-.117-1.993L17 8zM8 13h12a1 1 0 0 1 .117 1.993L20 15H8a1 1 0 0 1-.117-1.993zh12z");
}
</style><path class="a85f4ccxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:link-28-filled"} {...others} />);
}

export default Component;
