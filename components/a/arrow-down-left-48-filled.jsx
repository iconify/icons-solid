import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.t19_nxbav {
  fill: currentColor;
  d: path("M25.5 42a1.5 1.5 0 0 0 0-3H11.121l30.44-30.44a1.5 1.5 0 0 0-2.122-2.12L9 36.878V22.5a1.5 1.5 0 0 0-3 0v18A1.5 1.5 0 0 0 7.5 42z");
}
</style><path class="t19_nxbav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-down-left-48-filled"} {...others} />);
}

export default Component;
