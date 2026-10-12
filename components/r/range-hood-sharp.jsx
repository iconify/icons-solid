import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ei8jwacgs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 9V2.75M14.75 9V2.75M10.25 9h4.5l.73.68l5.04 4.64l.73.68H2.75l.73-.68l5.04-4.64l.73-.68zM7 18.25l-1 2.5m6-2.5V21m5-2.75l1 2.5");
}
</style><path class="ei8jwacgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:range-hood-sharp"} {...others} />);
}

export default Component;
