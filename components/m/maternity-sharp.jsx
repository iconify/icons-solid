import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g-hezvnod {
  d: path("M12 20.25h-.65l-.45-.45l-6.3-6.2a4.75 4.75 0 0 1 6.7-6.7l.7.7l.7-.7a4.75 4.75 0 0 1 6.7 6.7l-6.3 6.2l-.45.45z");
}

.nz9axgt9q {
  cx: 10.75px;
  cy: 9.5px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z4i2r6bap {
  d: path("M9.75 12.25h3.75V16H9.75Z");
}
</style><g class="x2cwu0gfd"><path class="g-hezvnod"/><circle class="nz9axgt9q"/><path class="z4i2r6bap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:maternity-sharp"} {...others} />);
}

export default Component;
