import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bokcop__n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14H7v7.5H2.5Zm7.25-2.5h4.5v10h-4.5Zm7.25-2h4.5v12H17Zm-14.5 1L9 6l5.25 2l7.25-5.5m-19 8h.01m18.99-8h.01");
}
</style><path class="bokcop__n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chart-combo"} {...others} />);
}

export default Component;
