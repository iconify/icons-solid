import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w6mdhtj6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m17.834 4.752l1.414 1.414a1.5 1.5 0 0 1 0 2.122l-9.094 9.094a1.5 1.5 0 0 1-.649.382l-2.101.6a1.43 1.43 0 0 1-1.768-1.768l.6-2.101a1.5 1.5 0 0 1 .382-.649l9.094-9.094a1.5 1.5 0 0 1 2.122 0m-4.42 2.298l3.536 3.536M6.343 14.121l3.536 3.536");
}
</style><path class="w6mdhtj6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pencil"} {...others} />);
}

export default Component;
