import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k9-rznwdd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 11V8a2 2 0 0 1 2-2h16m-3 3l3-3l-3-3m3 10v3a2 2 0 0 1-2 2H3m3-3l-3 3l3 3m4-10l2-2v6");
}
</style><path class="k9-rznwdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:repeat-one-duocolor"} {...others} />);
}

export default Component;
