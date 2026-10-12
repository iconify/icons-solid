import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jsmlogg5s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.45 12.35l-1.2-6.4l5.4 3.65M4 9.95l2.6-1.7m5.2-5.5l1.05 5.4m-.45-2.2a2.25 2.25 0 1 0 4.4-.85a2.25 2.25 0 1 0-4.4.85m-9.65 13.3c4-6.5 10-9 18.5-9");
}
</style><path class="jsmlogg5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:text-on-path-sharp"} {...others} />);
}

export default Component;
