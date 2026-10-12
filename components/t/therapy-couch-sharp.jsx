import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cr1rowptg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.75v-1.5h3.1l1.024-.003l.376.953l2.4 6.05h-6.9Zm0 5.5h18.5V18H2.75zM5.25 18v3.25M18.75 18v3.25");
}
</style><path class="cr1rowptg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:therapy-couch-sharp"} {...others} />);
}

export default Component;
