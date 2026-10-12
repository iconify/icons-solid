import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u0n65ckpx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.85 8.6L5.9 9.65l.35.35l-.35.35l-1.05 1.05l-.35.35l-.35-.35l-1.05-1.05l-.35-.35l.35-.35L4.15 8.6l.35-.35zm7.86-2.14l2.83 2.83l.71.71l-.71.71l-2.83 2.83l-.71.71l-.71-.71l-2.83-2.83l-.71-.71l.71-.71l2.83-2.83l.71-.71zm7.14 2.14l1.05 1.05l.35.35l-.35.35l-1.05 1.05l-.35.35l-.35-.35l-1.05-1.05l-.35-.35l.35-.35l1.05-1.05l.35-.35zM2.75 19h18.5M6 16.75V19m6-2.25V19m6-2.25V19");
}
</style><path class="u0n65ckpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:keyframe-sharp"} {...others} />);
}

export default Component;
