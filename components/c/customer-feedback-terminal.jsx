import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gv37pg0xc {
  d: path("M9 10c1.5 2 4.5 2 6 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wp_b0db3n {
  d: path("M4.5 2.5h15v12h-15Zm7.5 12v7m-4 0h8M9.5 7h.01m4.99 0h.01");
}
</style><g class="ulnmmdpxh"><path class="wp_b0db3n"/><path class="gv37pg0xc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:customer-feedback-terminal"} {...others} />);
}

export default Component;
