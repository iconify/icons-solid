import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.otocwe20g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7V2.5m2 5.25l3.25-3M15 10h4.5m-5.25 2.25l3 3m-7.5-3l-3 3M9 10H4.5m5.25-2.25l-3-3M12 21.5V15");
}
</style><path class="otocwe20g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:firework-crackle"} {...others} />);
}

export default Component;
