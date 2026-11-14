import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b7urdabar {
  d: path("M12 4.5c0-1.75 2-2.5 4.5-2C16 4.25 14 5 12 4.5ZM4.75 8.75C8.5 9 10 11 9 13c-1 1.5-3 1-5 3m15.25-7.25C16 9.5 14.5 11.5 15.5 14c1 2-1 4-.25 6.75");
}

.dhe-nqb-j {
  d: path("M3.5 13a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dhe-nqb-j"/><path class="b7urdabar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:earth-day"} {...others} />);
}

export default Component;
