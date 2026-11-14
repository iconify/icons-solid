import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s40qg9b5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8 12l-5.5 6q2.25 2.5 4.5 0q2.5 2.5 5 0q2.5 2.5 5 0q2.25 2.5 4.5 0L16 12Zm4-5L8.5 4.75v4.5Zm0 0l3.5-2.25v4.5Z");
}
</style><path class="s40qg9b5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ballet-kids"} {...others} />);
}

export default Component;
