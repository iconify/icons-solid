import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vnvzjibcs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.75 4.25c-6 0-11 4.25-11.25 11V17h1.75c6.75-.25 9.5-6.75 9.5-12.75ZM4 20L15 9m-2.5 2.5l3 1.25");
}
</style><path class="vnvzjibcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:feather-sharp"} {...others} />);
}

export default Component;
