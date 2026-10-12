import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.em_zpk9ss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.25c-5 0-9.25-1.75-9.25-4.25c0-2 2.75-3.5 6.75-4l3 3.5L14 13c4.5.25 7.25 1.75 7.25 4c0 2.5-4.25 4.25-9.25 4.25Zm0-9.75c-2.5 0-4.25-1.75-4.25-4.5H9.5l1 1l.338-2.7L12 3.75l1.162 1.55L13.5 8l1-1h1.75c0 2.75-1.75 4.5-4.25 4.5Z");
}
</style><path class="em_zpk9ss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lily-pad-sharp"} {...others} />);
}

export default Component;
