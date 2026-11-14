import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ity_4zkhh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.061 4.061l4.878 4.878a1.5 1.5 0 0 1 0 2.122l-4.878 4.878a1.5 1.5 0 0 1-2.122 0l-4.878-4.878a1.5 1.5 0 0 1 0-2.122l4.878-4.878a1.5 1.5 0 0 1 2.122 0M12 17v4.5m-2.5-12h5m-2.5 0V14");
}
</style><path class="ity_4zkhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dead-end-trail"} {...others} />);
}

export default Component;
