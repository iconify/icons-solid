import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yqi3pdhjc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.4 20.5h-.65l-1.75-6l-1.75 6H4.5V8h11v4.8M6 8V3m8 5V3m4 11c1.75 1.75 3 3.25 3 5a3 3 0 0 1-6 0c0-1.25.75-2.25 1.5-3c.25 1 .75 1.5 1.5 1.75c0-1.25-.25-2.5 0-3.75");
}
</style><path class="yqi3pdhjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:race-suit"} {...others} />);
}

export default Component;
