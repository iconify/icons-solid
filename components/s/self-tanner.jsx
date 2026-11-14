import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p0nng_jsd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 11.25h9l-1.25 7.25h-6.5Zm2 7.25h5v3h-5Zm0-10a2.5 2.5 0 0 1 5 0M12 3.25V2m4.5 3.75L17.75 5M7.5 5.75L6.25 5");
}
</style><path class="p0nng_jsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:self-tanner"} {...others} />);
}

export default Component;
