import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.brw6obg0z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.8 6.6l2.25-3a1.5 1.5 0 0 1 1.2-.6h3.5a1.5 1.5 0 0 1 1.2.6l2.25 3a1.5 1.5 0 0 1 .3.9v6.917a1.5 1.5 0 0 1-.394 1.013l-4 4.364a1.5 1.5 0 0 1-2.212 0l-4-4.364a1.5 1.5 0 0 1-.394-1.013V7.5a1.5 1.5 0 0 1 .3-.9m-.3.4h11M12 7v14");
}
</style><path class="brw6obg0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:feldspar"} {...others} />);
}

export default Component;
