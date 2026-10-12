import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e8r_4eaxd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.5 20.4l-4.2-4.2l-1.8-1.74V12.9c0-1.83 1.47-3.3 3.3-3.3h1.5l1.2 1.2l1.2-1.2h1.5c1.83 0 3.3 1.47 3.3 3.3v1.56l-1.8 1.74ZM18 8.7l-2.1-2.1l-.9-.88V3.3h2.4l.6.6l.6-.6H21v2.42l-.9.88Z");
}
</style><path class="e8r_4eaxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:valentine-hearts-sharp"} {...others} />);
}

export default Component;
