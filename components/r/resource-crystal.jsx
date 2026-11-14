import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qoivxwzot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.009 3.417l4 3.637a1.5 1.5 0 0 1 .491 1.11v8.125a1.5 1.5 0 0 1-.55 1.161l-4 3.273a1.5 1.5 0 0 1-1.9 0l-4-3.273a1.5 1.5 0 0 1-.55-1.161V8.164a1.5 1.5 0 0 1 .491-1.11l4-3.637a1.5 1.5 0 0 1 2.018 0M12 6.5v11");
}
</style><path class="qoivxwzot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:resource-crystal"} {...others} />);
}

export default Component;
