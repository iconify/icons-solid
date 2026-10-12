import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vdd99ubwt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.25h18.5V10H2.75zM9.5 6.63h5M4.25 12.5h15.5v8.75H4.25zm3.88 0v8.75M12 12.5v8.75m3.88-8.75v8.75");
}
</style><path class="vdd99ubwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cash-drawer-sharp"} {...others} />);
}

export default Component;
