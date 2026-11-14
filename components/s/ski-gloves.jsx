import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.shdh7qxxv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15V7a3 3 0 0 1 6 0v2.5c1.25-.25 1.75.5 1.5 1.5L9 14v1m12 0V7a3 3 0 0 0-6 0v2.5c-1.25-.25-1.75.5-1.5 1.5l1.5 3v1M2.5 15h7v5.5h-7Zm12 0h7v5.5h-7Z");
}
</style><path class="shdh7qxxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ski-gloves"} {...others} />);
}

export default Component;
