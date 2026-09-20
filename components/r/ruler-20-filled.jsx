import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.hf7idz6lz {
  fill: currentColor;
  d: path("M12.5 2A1.5 1.5 0 0 1 14 3.5v13a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 6 16.5v-13A1.5 1.5 0 0 1 7.5 2zM7 15.5h2.5a.5.5 0 0 0 0-1H7zm0-2.496h3.5a.5.5 0 0 0 0-1H7zM7 10.5h2.5a.5.5 0 0 0 0-1H7zM7 8h3.5a.5.5 0 0 0 0-1H7zm0-2.5h2.5a.5.5 0 0 0 0-1H7z");
}
</style><path class="hf7idz6lz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:ruler-20-filled"} {...others} />);
}

export default Component;
