import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uldps0q0t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.3 11.88l8.08-8.08l.71-.71l.71.71l1.4 1.4l.71.71l-.71.71l-8.08 8.08l-.71.71l-.71-.71l-1.4-1.4l-.71-.71zm-4.05 7.87c2-1.5 3.5-1.5 5 0s3.5 1.5 5 0s3.5-1.5 5 0");
}
</style><path class="uldps0q0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chalk-sharp"} {...others} />);
}

export default Component;
