import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rvy3_zuug {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m19.5 11.25l-7.4 7.4a4.5 4.5 0 0 1-6.35-6.35l7.95-7.95a3 3 0 0 1 4.25 4.25L10 16.55a1.5 1.5 0 0 1-2.1-2.1l7.1-7.1");
}
</style><path class="rvy3_zuug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:paperclip-x-sharp"} {...others} />);
}

export default Component;
