import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.wu1vs1qdg {
  fill: currentColor;
  d: path("M25 22a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zM7.5 8a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m0 2a.5.5 0 0 0-.5.5V13H4.5a.5.5 0 0 0 0 1H7v2.5a.5.5 0 0 0 1 0V14h2.5a.5.5 0 0 0 0-1H8v-2.5a.5.5 0 0 0-.5-.5M25 16a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2zm0-6a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2zm0-6a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2z");
}
</style><path class="wu1vs1qdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-expand-28-filled"} {...others} />);
}

export default Component;
