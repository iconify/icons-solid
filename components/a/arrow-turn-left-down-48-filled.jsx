import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.tmkkkzbro {
  fill: currentColor;
  d: path("M40.5 13a1.5 1.5 0 0 0 0-3h-18a7.5 7.5 0 0 0-7.5 7.5v17.379l-6.44-6.44a1.5 1.5 0 0 0-2.12 2.122l9 9a1.5 1.5 0 0 0 2.12 0l9-9a1.5 1.5 0 0 0-2.12-2.122L18 34.88V17.5a4.5 4.5 0 0 1 4.5-4.5z");
}
</style><path class="tmkkkzbro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-turn-left-down-48-filled"} {...others} />);
}

export default Component;
