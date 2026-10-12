import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oh-t-272f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.32 9.68a4.5 2.5-45 1 1 6.36-6.36a4.5 2.5-45 1 1-6.36 6.36Zm-11 11a4.5 2.5-45 1 1 6.36-6.36a4.5 2.5-45 1 1-6.36 6.36Zm6.36-6.36l4.64-4.64");
}
</style><path class="oh-t-272f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:paddle-sharp"} {...others} />);
}

export default Component;
