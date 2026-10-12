import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fvixjlkne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 11.9V7l.27-.54l.71-1.42l.27-.54l.27.54l.71 1.42l.27.54v5.5h-2.5zm5.5 0V5.25l.27-.54l.71-1.42l.27-.54l.27.54l.71 1.42l.27.54v7.25h-2.5zm5.5 0V8l.27-.54l.71-1.42l.27-.54l.27.54l.71 1.42l.27.54v4.5h-2.5zm-11-2.65h2.5m3-1.5h2.5m3 1.75h2.5m-15 3h16.5v8.75H3.75V19.5Z");
}
</style><path class="fvixjlkne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:crayons-box-sharp"} {...others} />);
}

export default Component;
