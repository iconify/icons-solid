import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xbw-vibly {
  fill: currentColor;
  d: path("M10.75 3a.75.75 0 0 0 0 1.5h7.67L16.92 6h.02l-1.72 1.72a.75.75 0 0 0 1.06 1.06L18 7.06v.022l1.5-1.5v7.668a.75.75 0 0 0 1.5 0v-9.5a.75.75 0 0 0-.75-.75zM3 20.318a1 1 0 0 1 0-.155zm.75.682a.747.747 0 0 1-.75-.75c0-.192.073-.384.22-.53l3.25-3.25a.75.75 0 0 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-.53.22m0 0h-.076a1 1 0 0 0 .174 0zm9.78-9.47a.75.75 0 1 0-1.06-1.06l-3.25 3.25a.75.75 0 1 0 1.06 1.06z");
}
</style><path class="xbw-vibly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-up-right-dashes-24-regular"} {...others} />);
}

export default Component;
