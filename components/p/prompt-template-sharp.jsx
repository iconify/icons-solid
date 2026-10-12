import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fha6990wp {
  d: path("M2.75 4.75h18.5v14.5H2.75z");
}

.myuvscn1x {
  d: path("M9 8.25H7.25v2.5l-1 1.25l1 1.25v2.5H9m6-7.5h1.75v2.5l1 1.25l-1 1.25v2.5H15M10.75 12h2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fha6990wp"/><path class="myuvscn1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:prompt-template-sharp"} {...others} />);
}

export default Component;
