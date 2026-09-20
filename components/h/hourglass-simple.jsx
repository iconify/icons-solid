import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.st5rg3otl {
  fill: currentColor;
  d: path("M211.18 196.56L139.57 128l71.61-68.56a2 2 0 0 1 .13-.13A16 16 0 0 0 200 32H56a16 16 0 0 0-11.3 27.31l.12.13L116.43 128l-71.61 68.56l-.12.13A16 16 0 0 0 56 224h144a16 16 0 0 0 11.32-27.31a2 2 0 0 1-.14-.13M200 48l-72 68.92L56 48ZM56 208l72-68.92L200 208Z");
}
</style><path class="st5rg3otl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:hourglass-simple"} {...others} />);
}

export default Component;
