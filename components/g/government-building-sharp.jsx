import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rugvij5ug {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.59 9.46l7.57-4.92L12 4l.84.54l7.57 4.92l.84.54H2.75zM7 12.5v3.75m5-3.75v3.75m5-3.75v3.75m-13.25 2.5h16.5m-17.5 2.5h18.5");
}
</style><path class="rugvij5ug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:government-building-sharp"} {...others} />);
}

export default Component;
