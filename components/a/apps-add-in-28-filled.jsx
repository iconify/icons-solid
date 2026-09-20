import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.iadcosbob {
  fill: currentColor;
  d: path("M21 2a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0V8h-3a1 1 0 1 1 0-2h3V3a1 1 0 0 1 1-1M6 3a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3h-7V6a3 3 0 0 0-3-3zm7 10H5V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm2 10v-8h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zm-2 0H6a1 1 0 0 1-1-1v-7h8z");
}
</style><path class="iadcosbob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:apps-add-in-28-filled"} {...others} />);
}

export default Component;
