import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gnjxmlbff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.896 18.088l9.958-8.357l2.25 2.681l-9.958 8.357ZM4.23 15.01l3.447-2.892M15.75 9.75l4.75-5.5m-3.25 7.25l4.25-2.25m-7-.75l.75-5");
}
</style><path class="gnjxmlbff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:penlight"} {...others} />);
}

export default Component;
