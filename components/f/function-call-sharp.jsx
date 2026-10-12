import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y7gquf1pe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 4H7v16m-3-9.75h6m5.25-2.75c-1.4 1.4-2 2.9-2 4.5s.6 3.1 2 4.5m3.5-9c1.4 1.4 2 2.9 2 4.5s-.6 3.1-2 4.5");
}
</style><path class="y7gquf1pe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:function-call-sharp"} {...others} />);
}

export default Component;
