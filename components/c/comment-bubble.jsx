import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hag05nbxg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6h4.5m-4.5 4.25h4.5m-4.5 9.5h18.5m-9-16h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H15.5l-3.25 2.75v-2.75a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2");
}
</style><path class="hag05nbxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:comment-bubble"} {...others} />);
}

export default Component;
