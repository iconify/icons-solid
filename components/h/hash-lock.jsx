import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cn0qf2bqu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3v11m5-11v11M3.5 6.5h12M3.5 11h12m-.5 6.75h6v3.75h-6Zm1.25 0V16.5a1.75 1.75 0 0 1 3.5 0v1.25");
}
</style><path class="cn0qf2bqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hash-lock"} {...others} />);
}

export default Component;
