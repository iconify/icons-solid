import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hn1tqo84g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.78 4.22c.17 5.13-5.84 11.14-10.61 15.56c-2.37 2.23-7.18-2.58-4.95-4.95C8.64 10.06 14.65 4.05 19.78 4.22ZM16.6 7.4l-8.84 8.84");
}
</style><path class="hn1tqo84g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:surfboard-sharp"} {...others} />);
}

export default Component;
