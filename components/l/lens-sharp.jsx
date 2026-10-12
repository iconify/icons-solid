import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w9b50towf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c2.4 2.5 3.5 5.6 3.5 9.25s-1.1 6.75-3.5 9.25c-2.4-2.5-3.5-5.6-3.5-9.25S9.6 5.25 12 2.75ZM2.75 8.5h4m-4 7h4M17 9.25L21.25 12M17 14.75L21.25 12");
}
</style><path class="w9b50towf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lens-sharp"} {...others} />);
}

export default Component;
