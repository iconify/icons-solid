import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbrzoebxj {
  fill: currentColor;
  d: path("M20 8.35V19h-2v-8H6v8H4V8.35l8-3.2zM22 21V7L12 3L2 7v14h6v-8h8v8zm-11-2H9v2h2zm2-3h-2v2h2zm2 3h-2v2h2z");
}
</style><path class="dbrzoebxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-warehouse"} {...others} />);
}

export default Component;
