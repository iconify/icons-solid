import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pju9tccfl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5V17h8.5M4 6.5h11M4 11.75h7M12.5 17a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm3-1.5l3 3m0-3l-3 3");
}
</style><path class="pju9tccfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:stack-trace"} {...others} />);
}

export default Component;
