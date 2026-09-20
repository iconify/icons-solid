import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z3whdubey {
  fill: currentColor;
  d: path("M17 19V9.5H6.921l3.793 3.792l-.708.714L5 9l5-5l.714.714L6.92 8.5H18V19z");
}
</style><path class="z3whdubey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrow-top-left-outline"} {...others} />);
}

export default Component;
