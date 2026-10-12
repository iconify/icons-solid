import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ypkxa_b-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 5.25H17V8.5h4.25v5H17v4H8.5V8.25H3.25v-3zm3.75 6H12m-3.5 3H12M2.75 21h3.5m4 0h3.5m4 0h3.5");
}
</style><path class="ypkxa_b-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hitchhike-sharp"} {...others} />);
}

export default Component;
