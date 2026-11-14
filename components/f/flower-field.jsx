import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j74fs5b2p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20h19M12.75 5.25a1 1 0 1 1 .5 1.5A1 1 0 1 1 12 7.5a1 1 0 1 1-1.25-.75a1 1 0 1 1 .5-1.5a1 1 0 1 1 1.5 0ZM12 7.5V20m-5.75-8a1 1 0 1 1 .5 1.5a1 1 0 1 1-1.25.75a1 1 0 1 1-1.25-.75a1 1 0 1 1 .5-1.5a1 1 0 1 1 1.5 0Zm-.75 2.25V20m13.75-9.5a1 1 0 1 1 .5 1.5a1 1 0 1 1-1.25.75a1 1 0 1 1-1.25-.75a1 1 0 1 1 .5-1.5a1 1 0 1 1 1.5 0Zm-.75 2.25V20");
}
</style><path class="j74fs5b2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:flower-field"} {...others} />);
}

export default Component;
