import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jhqhfgj2x {
  d: path("M3 5.5L12 2l9 3.5m-16.5 0h15v11h-15Zm7.5 11v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xu-dqfb5g {
  d: path("M7.25 8.25h3v5.5h-3Zm6 1h3v4.5h-3Z");
}
</style><g class="ulnmmdpxh"><path class="jhqhfgj2x"/><path class="xu-dqfb5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:book-exchange-box"} {...others} />);
}

export default Component;
