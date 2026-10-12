import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k3oj3f_8y {
  d: path("M2.75 14.25c1.55 0 1.55 1.25 3.08 1.25s1.55-1.25 3.09-1.25S10.46 15.5 12 15.5s1.54-1.25 3.08-1.25s1.55 1.25 3.09 1.25s1.53-1.25 3.08-1.25m-15 4h11.5M12 10.75V7.5m0-4.75l1.5 1.579v.921a1.5 1.5 0 0 1-3 0v-.921z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xdjzwzbdf {
  d: path("M2.75 10.75h18.5v10.5H2.75z");
}
</style><g class="x2cwu0gfd"><path class="xdjzwzbdf"/><path class="k3oj3f_8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cake-slice-sharp"} {...others} />);
}

export default Component;
