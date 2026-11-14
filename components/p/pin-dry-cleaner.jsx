import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ogjqbtrcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 10.5l-8.75 6.75Q2.5 18.5 4 18.5h16q1.5 0 .75-1.25ZM9.75 6.75A2.25 2.25 0 1 1 12 9v1.5");
}
</style><path class="ogjqbtrcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pin-dry-cleaner"} {...others} />);
}

export default Component;
