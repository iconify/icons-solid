import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xe8qpsbii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 17a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm10-10a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0ZM10 14l4-4");
}
</style><path class="xe8qpsbii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:nitrogen-molecule"} {...others} />);
}

export default Component;
