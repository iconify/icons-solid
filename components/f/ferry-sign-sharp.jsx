import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.itxcm0bbl {
  d: path("M2.75 2.75h18.5v18.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xb_buiast {
  d: path("M6.25 11.5h11.5l-1.75 3H8Zm2.75 0V9h5.75v2.5M12.5 9V6.75M6 18.25c1 0 1.5-.75 2.5-.75s1.5.75 2.5.75s1.5-.75 2.5-.75s1.5.75 2.5.75s1-.5 2-.75");
}
</style><g class="x2cwu0gfd"><path class="itxcm0bbl"/><path class="xb_buiast"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ferry-sign-sharp"} {...others} />);
}

export default Component;
