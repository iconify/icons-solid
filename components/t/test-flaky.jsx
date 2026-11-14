import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.un0hh0-9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.904 16.854l4.95-4.95a1 1 0 0 1 1.414 0l2.828 2.828a1 1 0 0 1 0 1.414l-4.95 4.95a1 1 0 0 1-1.414 0l-2.828-2.828a1 1 0 0 1 0-1.414Zm9-9l4.95-4.95a1 1 0 0 1 1.414 0l2.828 2.828a1 1 0 0 1 0 1.414l-4.95 4.95a1 1 0 0 1-1.414 0l-2.828-2.828a1 1 0 0 1 0-1.414ZM16 16l2 2M8 8L6 6");
}
</style><path class="un0hh0-9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:test-flaky"} {...others} />);
}

export default Component;
