import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w4a62q3lc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm4.25 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm4.25 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm4.25 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM19 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM3.5 12h.01m4.24 0h.01M12 12h.01");
}
</style><path class="w4a62q3lc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:performance-rating"} {...others} />);
}

export default Component;
