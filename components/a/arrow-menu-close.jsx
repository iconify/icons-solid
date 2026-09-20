import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fu6jrdbix {
  fill: currentColor;
  d: path("M11 17V7l-5 5zm2 4h2V3h-2z");
}
</style><path class="fu6jrdbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-menu-close"} {...others} />);
}

export default Component;
