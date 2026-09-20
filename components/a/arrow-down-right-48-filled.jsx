import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eli3ou6hl {
  fill: currentColor;
  d: path("M22.5 42a1.5 1.5 0 0 1 0-3h14.379L6.439 8.56a1.5 1.5 0 1 1 2.122-2.12L39 36.878V22.5a1.5 1.5 0 0 1 3 0v18a1.5 1.5 0 0 1-1.5 1.5z");
}
</style><path class="eli3ou6hl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-down-right-48-filled"} {...others} />);
}

export default Component;
