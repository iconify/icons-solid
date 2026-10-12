import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a8ci6achw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 17.5v-11c0-2.25 1.5-3.75 3-3.75s3 1.5 3 3.75v11Zm-.56-7.5l-7.38 6.5Q5 17 5 17.75v2.75q0 .75.69.45l7.12-3.15q.69-.3.69-1.05v-6.5q0-.75-.56-.25M16 17.5l-.25 3h2.5l-.25-3Z");
}
</style><path class="a8ci6achw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rocket-fin"} {...others} />);
}

export default Component;
