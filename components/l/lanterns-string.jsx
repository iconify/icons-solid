import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oq9l10bkn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19M3 11.25a2 3.25 0 1 0 4 0a2 3.25 0 1 0-4 0Zm7 5.5a2 3.25 0 1 0 4 0a2 3.25 0 1 0-4 0Zm7-5.5a2 3.25 0 1 0 4 0a2 3.25 0 1 0-4 0ZM5 3.5V8m7-4.5v10m7-10V8");
}
</style><path class="oq9l10bkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lanterns-string"} {...others} />);
}

export default Component;
