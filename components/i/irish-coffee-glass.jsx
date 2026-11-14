import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wf-zsqdaj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h8.5V11a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4Zm8.5 2H16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1.5M10.25 15v5.5M7 20.5h6.5M6 7h8.5");
}
</style><path class="wf-zsqdaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:irish-coffee-glass"} {...others} />);
}

export default Component;
