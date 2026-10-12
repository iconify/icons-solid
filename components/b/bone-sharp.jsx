import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m-4b13b4j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.72 14.16l6.44-6.44a2.5 2.5 0 1 1 3.85-1.73a2.5 2.5 0 1 1-1.73 3.85l-6.44 6.44a2.5 2.5 0 1 1-3.85 1.73a2.5 2.5 0 1 1 1.73-3.85Z");
}
</style><path class="m-4b13b4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bone-sharp"} {...others} />);
}

export default Component;
