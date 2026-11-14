import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g-kkpc8gr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.779 5.709l.677 1.455a1.5 1.5 0 0 0 1.178.855l1.592.195a1.135 1.135 0 0 1 .636 1.957l-1.174 1.093a1.5 1.5 0 0 0-.45 1.385l.307 1.574a1.135 1.135 0 0 1-1.664 1.21l-1.403-.779a1.5 1.5 0 0 0-1.456 0l-1.403.779a1.135 1.135 0 0 1-1.664-1.21l.307-1.574a1.5 1.5 0 0 0-.45-1.385l-1.174-1.093a1.135 1.135 0 0 1 .636-1.957l1.592-.195a1.5 1.5 0 0 0 1.178-.855l.677-1.455a1.135 1.135 0 0 1 2.058 0M14.75 18l2 2L21 15.75");
}
</style><path class="g-kkpc8gr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:star-check"} {...others} />);
}

export default Component;
