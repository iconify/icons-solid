import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ze5ibubuk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.98 18.67a8.75 8.75 0 1 1 10.04 0a2.38 2.38 0 0 1-2.73-3.89a4 4 0 1 0-4.58 0a2.38 2.38 0 0 1-2.73 3.89M12 2.75V7.5");
}
</style><path class="ze5ibubuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:neck-pillow"} {...others} />);
}

export default Component;
