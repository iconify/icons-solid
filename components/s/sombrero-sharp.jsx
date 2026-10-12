import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ieoqfqbzy {
  d: path("M2.75 12.75c1.5 2.5 3.5 4 5.75 4h7c2.25 0 4.25-1.5 5.75-4");
}

.qlx-5obcj {
  d: path("m8.5 16.75l2-9.75c.3-1.4 2.7-1.4 3 0l2 9.75ZM9.25 13h5.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qlx-5obcj"/><path class="ieoqfqbzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sombrero-sharp"} {...others} />);
}

export default Component;
