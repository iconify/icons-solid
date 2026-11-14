import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ic8gymbdv {
  d: path("m2.5 8.5l2.5-5h14l2.5 5Zm2 0v13h15v-13m-15 7h15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z514gmasc {
  d: path("M8.5 11.25h7v4.25h-7Zm3.5 0v4.25");
}
</style><g class="ulnmmdpxh"><path class="ic8gymbdv"/><path class="z514gmasc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:kiosk-news"} {...others} />);
}

export default Component;
