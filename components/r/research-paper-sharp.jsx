import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ojpvc5bcy {
  d: path("M14.75 2.75v4.5h4.5M7.75 8h5.5m-5.5 3.75h2.75m-2.75 3h2.75m-2.75 3h2.75m3-6h2.75m-2.75 3h2.75m-2.75 3h2.75");
}

.rihmi4c3a {
  d: path("M7.25 2.75h7.5l4.5 4.5v14H4.75V2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rihmi4c3a"/><path class="ojpvc5bcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:research-paper-sharp"} {...others} />);
}

export default Component;
