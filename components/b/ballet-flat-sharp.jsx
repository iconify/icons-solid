import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ok2jmgb0i {
  d: path("M2.75 17.75V12l1 .25c1.75 1.5 5.75 2 9.25 1c4-.5 8.25 2 8.25 4.25v1.25H2.75z");
}

.owpy-pgkv {
  d: path("M7 13.75c1-3.5 4.5-3.75 5.75-.4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ok2jmgb0i"/><path class="owpy-pgkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ballet-flat-sharp"} {...others} />);
}

export default Component;
