import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x7cn3bq0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5h7v3c0 2.5-1.5 4-3.5 4s-3.5-1.5-3.5-4ZM7 12v8m-2.5 0h5m4-15h7v3c0 2.5-1.5 4-3.5 4s-3.5-1.5-3.5-4Zm3.5 7v8m-2.5 0h5M12 2v1.25");
}
</style><path class="x7cn3bq0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:toast-glasses"} {...others} />);
}

export default Component;
