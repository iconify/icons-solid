import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w-c-rzb3g {
  fill: currentColor;
  d: path("M3 5H1v16c0 1.1.9 2 2 2h16v-2H3zm11 7V8a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v1H9v2h3a2 2 0 0 0 2-2m-3-3V8h1v1zm10-8H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 8h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14z");
}
</style><path class="w-c-rzb3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:filter-9-plus"} {...others} />);
}

export default Component;
