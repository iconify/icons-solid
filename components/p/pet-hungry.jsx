import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kss9rub1h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.423 13.25H5.5q-.133.002-.265-.02q-.131-.021-.257-.066q-.125-.044-.241-.11t-.218-.152t-.188-.187t-.152-.217t-.112-.241T4 12L2.5 5.5h16L17 12q-.021.124-.062.242t-.101.228t-.138.209t-.171.182q-.092.085-.198.152q-.105.068-.221.117q-.115.049-.237.078q-.122.03-.247.039M16.5 17h3.25a1 1 0 1 1 1 1a1 1 0 1 1-1 1H16.5a1 1 0 1 1-1-1a1 1 0 1 1 1-1");
}
</style><path class="kss9rub1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pet-hungry"} {...others} />);
}

export default Component;
