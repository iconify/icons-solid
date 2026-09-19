import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h7y-kibsk {
  fill: currentColor;
  d: path("m14 12l-2 2l-2-2l2-2zm-2-6l2.12 2.12l2.5-2.5L12 1L7.38 5.62l2.5 2.5zm-6 6l2.12-2.12l-2.5-2.5L1 12l4.62 4.62l2.5-2.5zm12 0l-2.12 2.12l2.5 2.5L23 12l-4.62-4.62l-2.5 2.5zm-6 6l-2.12-2.12l-2.5 2.5L12 23l4.62-4.62l-2.5-2.5z");
}
</style><path class="h7y-kibsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-api"} {...others} />);
}

export default Component;
