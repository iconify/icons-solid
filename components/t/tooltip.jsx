import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zka01zkmu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4h15a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-5l-2.5 3l-2.5-3h-5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM7 10.25h10");
}
</style><path class="zka01zkmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:tooltip"} {...others} />);
}

export default Component;
