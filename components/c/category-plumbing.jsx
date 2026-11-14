import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nzg6-2b0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5h8v5h-8Zm8 2.5h5a3.5 3.5 0 0 1 3.5 3.5V15m-2 0h4M6.5 3.5v4m-3-4h6M19 17.75c-1 1.25-1.75 2-1.75 2.25a1.75 1.75 0 0 0 3.5 0c0-.25-.75-1-1.75-2.25Z");
}
</style><path class="nzg6-2b0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:category-plumbing"} {...others} />);
}

export default Component;
