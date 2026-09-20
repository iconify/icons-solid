import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.f1thdmybt {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 0 6.926 5.978a.5.5 0 0 0-.781-.338a2 2 0 0 1-3.111-1.273a.5.5 0 0 0-.401-.4A2 2 0 0 1 9.36 1.854a.5.5 0 0 0-.338-.78A7 7 0 0 0 8 1m0 7.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m-2 2a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M4.75 7a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m5.75 4.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0");
}
</style><path class="f1thdmybt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:cookies-16-filled"} {...others} />);
}

export default Component;
