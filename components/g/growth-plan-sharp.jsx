import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qwqyq_8rc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 14.75h13.5v6.5H5.25zm0 3.25h13.5M12 14.75V9.5m0 1c0-3-2-5.25-5.75-5.25c0 3.25 2 5.25 5.75 5.25Zm0-2c0-3.25 2-5.5 5.75-5.75c0 3.5-2 5.75-5.75 5.75Z");
}
</style><path class="qwqyq_8rc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:growth-plan-sharp"} {...others} />);
}

export default Component;
