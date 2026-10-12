import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t8bvmtbof {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 18.75V9.5m0 5.5H7.5V7.5m4.5 5h4.5V4.25m-9 6.25H4.25v-5m12.25 4h3.75V6.25M7.5 7.5v-3m-1 16.75c.5-1.5 2-2.5 5.5-2.5s5 1 5.5 2.5Z");
}
</style><path class="t8bvmtbof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:coral-sharp"} {...others} />);
}

export default Component;
