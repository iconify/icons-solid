import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sqduyhbgk {
  fill: currentColor;
  d: path("M4 15h16v-2H4zm0 4h16v-2H4zm0-8h16V9H4zm0-6v2h16V5z");
}
</style><path class="sqduyhbgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-view-headline"} {...others} />);
}

export default Component;
