import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o2r3xrj1e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 14.5h5v5h-5ZM3 15h6.5v4H3Zm11.5 0H21v4h-6.5Zm-6-6q3.5 4 7 0M12 11v3.5M17.75 7L21 3.75m-1.5 6.5l2-2");
}
</style><path class="o2r3xrj1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:interstellar-probe"} {...others} />);
}

export default Component;
