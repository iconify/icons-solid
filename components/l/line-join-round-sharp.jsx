import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m3ce0y_pa {
  d: path("M2.75 5.25h13v16m-13-7.5h4.5v7.5");
}

.qr9-o6rkg {
  d: path("M2.75 9.5h8.75v11.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="m3ce0y_pa"/><path class="qr9-o6rkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:line-join-round-sharp"} {...others} />);
}

export default Component;
