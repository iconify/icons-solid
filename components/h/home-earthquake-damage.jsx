import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ev1qux2dm {
  d: path("m9.5 4.5l2 4l-2 3l3 3l-1 3m-9 3.5l2.5-.75l2.5.75l2.5-.75l2.5.75l2.5-.75l2.5.75l2.5-.75l1.5.5");
}

.o5vd88bxi {
  d: path("m3.5 9.5l8.5-7l8.5 7v8h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o5vd88bxi"/><path class="ev1qux2dm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:home-earthquake-damage"} {...others} />);
}

export default Component;
