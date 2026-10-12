import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wbyt5zbxj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 16V9.25h2.5V14h4.25v7.25H7.75V16h1Zm2.5-1.5v2.25M11 6.5V4M7.94 7.93L6.02 6.32m8.04 1.61l1.92-1.61");
}
</style><path class="wbyt5zbxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tap-gesture-sharp"} {...others} />);
}

export default Component;
