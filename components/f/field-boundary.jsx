import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hud1qb6ap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm17 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM2 19a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm17 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM7.75 5h2.75m3 0h2.75m-8.5 14h2.75m3 0h2.75M3.5 9.25v5.5m17-5.5v5.5");
}
</style><path class="hud1qb6ap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:field-boundary"} {...others} />);
}

export default Component;
