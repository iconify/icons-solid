import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t6z63nbnk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 15a9.25 9.25 0 0 1 18.5 0v3.25H2.75v-1ZM6 15h1.5M12 8.5V10m4.5 5H18m-6 0l3.75-3.75");
}
</style><path class="t6z63nbnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:speedometer-sharp"} {...others} />);
}

export default Component;
