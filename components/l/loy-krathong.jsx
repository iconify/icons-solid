import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v2jc14bhz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 12.5l3.5-3l2.5 3L12 10l2.5 2.5l2.5-3l3.5 3c-1 3-4.5 4.5-8.5 4.5s-7.5-1.5-8.5-4.5Zm0 8.5c2-1.25 4-1.25 5.75 0s3.75 1.25 5.5 0s3.75-1.25 5.75 0M12 2.5C14 4.75 14 7 12 7s-2-2.25 0-4.5Z");
}
</style><path class="v2jc14bhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:loy-krathong"} {...others} />);
}

export default Component;
