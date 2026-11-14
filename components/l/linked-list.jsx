import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y4pit49pd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5h4v7h-4Zm7.5 0h4v7h-4Zm7.5 0h4v7h-4ZM6.5 12H10m-1.25-1.25L10 12l-1.25 1.25M14 12h3.5m-1.25-1.25L17.5 12l-1.25 1.25");
}
</style><path class="y4pit49pd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:linked-list"} {...others} />);
}

export default Component;
