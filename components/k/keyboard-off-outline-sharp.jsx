import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mc3gskb2g {
  fill: currentColor;
  d: path("M19.85 22.525L1.475 4.15L2.9 2.725L21.275 21.1zM8 16v-2h6.175l2 2zm-3-3v-2h2v2zm3 0v-2h2v2zm9 0v-2h2v2zM5 10V8h2v2zm9 0V8h2v2zm3 0V8h2v2zm3 7V7h-9.975l-2-2H22v14.025zM2 19V5h3.175l2 2H4v10h13.175l2 2zm9.025-11H13v1.975zM14 11h2v1.975zm1 1");
}
</style><path class="mc3gskb2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:keyboard-off-outline-sharp"} {...others} />);
}

export default Component;
