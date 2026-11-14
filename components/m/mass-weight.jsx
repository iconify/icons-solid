import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a14-i4-7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.028 9h5.944a2.625 2.625 0 0 1 2.54 1.962l1.63 6.25a2.625 2.625 0 0 1-2.54 3.288H7.398a2.625 2.625 0 0 1-2.54-3.288l1.63-6.25A2.625 2.625 0 0 1 9.028 9m.722-3.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M12 7.5V9");
}
</style><path class="a14-i4-7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mass-weight"} {...others} />);
}

export default Component;
