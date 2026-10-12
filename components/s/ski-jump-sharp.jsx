import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vloa5obke {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21.25V2.75h3.75M10 21.25V2.75h3.75M16 4.5v16.75M20 4.5v16.75m-5.25-3.5h2.5m1.5 0h2.5");
}
</style><path class="vloa5obke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ski-jump-sharp"} {...others} />);
}

export default Component;
