import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p973b55zf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c3 2.75 4.5 5 4.5 7.5a4.5 4.5 0 0 1-9 0C7.5 8.5 8.5 7 9.5 6l.346 1.731L11 8.5c0-2 .25-3.75 1-5.75Zm-7 18.5l14-5.5m0 5.5l-14-5.5");
}
</style><path class="p973b55zf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:campfire-off-sharp"} {...others} />);
}

export default Component;
