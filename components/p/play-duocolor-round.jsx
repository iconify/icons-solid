import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f8s66ibcf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m10.59 4.456l8 5c1.88 1.175 1.88 3.913 0 5.088l-8 5C8.592 20.793 6 19.356 6 17V7c0-2.356 2.592-3.793 4.59-2.544");
}
</style><path class="f8s66ibcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:play-duocolor-round"} {...others} />);
}

export default Component;
