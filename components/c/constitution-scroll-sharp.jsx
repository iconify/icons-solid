import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a6daw4b1d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 6.25h11.5v11.5H6.25Zm-1.5-3.5h14.5v3.5H4.75zm0 15h14.5v3.5H4.75zm4-8.75h6.5m-6.5 2.75h6.5m-6.5 2.75h4");
}
</style><path class="a6daw4b1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:constitution-scroll-sharp"} {...others} />);
}

export default Component;
