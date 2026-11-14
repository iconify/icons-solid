import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cxkz6pcqw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 3h10.5A1.75 1.75 0 0 1 19 4.75v5.75a1.75 1.75 0 0 1-1.75 1.75H14A1.75 1.75 0 0 0 12.25 14v4.043a1.21 1.21 0 0 1-1.75 1.082l-.941-.471a1.75 1.75 0 0 0-1.607.021l-1.077.575A1.275 1.275 0 0 1 5 18.125V4.75A1.75 1.75 0 0 1 6.75 3M8.5 6.5h7m-7 3h7M18 15v6m-3-3h6");
}
</style><path class="cxkz6pcqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pos-sale-new"} {...others} />);
}

export default Component;
