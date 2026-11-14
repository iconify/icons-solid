import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hm97pabza {
  d: path("M11.5 12.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM6.75 14.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM10 10.75a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0ZM9.75 17a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm9-7.5c1.75-2.5.75-5.5-2-5.75c-1.5 0-2.5 1-2.25 2.25");
}

.p4v13zjzv {
  d: path("M2.5 13.25a8.5 5.25 0 1 0 17 0a8.5 5.25 0 1 0-17 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p4v13zjzv"/><path class="hm97pabza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ovary"} {...others} />);
}

export default Component;
