import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jmho_o34l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11L4 19.75c.15 1 1 1.75 2 1.75h5.5c1 0 1.85-.75 2-1.75L15 11ZM3 7.5h5.5V11H3Zm18-5l-3.25 15m0 0l-2.25 4m2.25-4l-.25 4m.25-4l1.75 4m-1.75-4l3.75 3");
}
</style><path class="jmho_o34l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cleaner-hospital"} {...others} />);
}

export default Component;
