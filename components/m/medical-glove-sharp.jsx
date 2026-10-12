import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y-_6kccag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 15.25v-8.5h2.5V8V3.5h2.5v1.25V3h2.5v2.25V4h2.5v8.5l1.6-1.6a1.4 1.4 0 0 1 2 2l-2.6 2.35Zm2.5-6.75V12m2.5-7v7m2.5-6.5V12m-8.5 3.25h12.5v6H5.25z");
}
</style><path class="y-_6kccag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:medical-glove-sharp"} {...others} />);
}

export default Component;
