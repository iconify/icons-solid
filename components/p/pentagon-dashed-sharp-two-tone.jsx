import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ymgr15b7b {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5447 7.5903L3.0022 10.5712L4.264 14.5931M5.0123 16.9784L6.2741 21.0003L10.75 21.0003M13.25 21.0003L17.7259 21.0003L18.9877 16.9784M19.736 14.5931L20.9978 10.5712L17.4553 7.5903M15.5425 5.9806L12 2.9997L8.4575 5.9806");
}
</style><path class="ymgr15b7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:pentagon-dashed-sharp-two-tone"} {...others} />);
}

export default Component;
