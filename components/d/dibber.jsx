import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c0n_zj9xz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 14.5L10 10V4.5a2 2 0 0 1 2-2a2 2 0 0 1 2 2V10Zm-9.5 6c1.5-3 4.5-4 7.5-4l2 2l2-2c3 0 6 1 7.5 4ZM10 10h4");
}
</style><path class="c0n_zj9xz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dibber"} {...others} />);
}

export default Component;
