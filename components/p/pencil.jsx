import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t1ylcpoqf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.773 3.691l3.536 3.536l-10.43 10.43l-4.95 1.414l1.414-4.95ZM13.414 7.05l3.536 3.536M6.343 14.121l3.536 3.536");
}
</style><path class="t1ylcpoqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pencil"} {...others} />);
}

export default Component;
