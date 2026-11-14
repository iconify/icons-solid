import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bdlfycban {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3za3 3 0 0 1 3 3v12.5a3 3 0 0 1-3 3a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3M2.5 7H9m6 0h6.5M12 3v6.5M9 13h6");
}
</style><path class="bdlfycban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:clothes-peg"} {...others} />);
}

export default Component;
