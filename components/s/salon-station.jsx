import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ilk7xub_b {
  d: path("M8.5 8.5A4 4 0 0 1 11 5.25m-5 12h7m-5.5 0V21m3-3.75V21");
}

.pkvcph4ln {
  d: path("M5.5 8.25a6.5 6.25 0 1 0 13 0a6.5 6.25 0 1 0-13 0ZM3.5 21h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pkvcph4ln"/><path class="ilk7xub_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:salon-station"} {...others} />);
}

export default Component;
