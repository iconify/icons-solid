import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qjx2p50hr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.5 3l3.5 7l3.5-7h2c0 4 1 6 2.5 6.5V21H4V9.5C5.5 9 6.5 7 6.5 3ZM4 17.5h16m-12 0V21m4-3.5V21m4-3.5V21");
}
</style><path class="qjx2p50hr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:knit-vest"} {...others} />);
}

export default Component;
