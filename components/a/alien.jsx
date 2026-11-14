import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lixwlphvo {
  d: path("M12 2.5c5.5 0 8.5 4 8.5 8c0 5-5.5 11-8.5 11s-8.5-6-8.5-11c0-4 3-8 8.5-8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x0lpyn4tl {
  d: path("M6.25 9.5c2.25 0 4.25 1.75 4.25 4.5c-2.25 0-4.25-2-4.25-4.5Zm11.5 0c-2.25 0-4.25 1.75-4.25 4.5c2.25 0 4.25-2 4.25-4.5Z");
}
</style><g class="ulnmmdpxh"><path class="lixwlphvo"/><path class="x0lpyn4tl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:alien"} {...others} />);
}

export default Component;
