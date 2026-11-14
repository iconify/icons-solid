import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n8klmjb0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 6.5h13.5A1.25 1.25 0 0 1 20 7.75A1.25 1.25 0 0 1 18.75 9H5.25A1.25 1.25 0 0 1 4 7.75A1.25 1.25 0 0 1 5.25 6.5M12 4v2.5M6 12v2m4-2v2m4-2v2m4-2v2M8 17.5v2m4-2v2m4-2v2");
}
</style><path class="n8klmjb0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:rain-shower"} {...others} />);
}

export default Component;
