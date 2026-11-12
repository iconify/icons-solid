import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q_d_ntx3z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.1417 5.99954L12.0001 1.85791L7.85847 5.99954M12.0001 1.85791L12 22.1422M7.85839 18.0005L12 22.1422L16.1416 18.0005");
}
</style><path class="q_d_ntx3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-vertical-linear"} {...others} />);
}

export default Component;
