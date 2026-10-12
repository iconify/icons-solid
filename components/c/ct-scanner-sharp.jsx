import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p0vexcb9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75a6.25 6.25 0 1 1 0 12.5a6.25 6.25 0 1 1 0-12.5Zm0 3.75a2.5 2.5 0 1 0 0 5a2.5 2.5 0 1 0 0-5Zm-8.25 12h16.5M7 18.5v2.75m10-2.75v2.75");
}
</style><path class="p0vexcb9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ct-scanner-sharp"} {...others} />);
}

export default Component;
