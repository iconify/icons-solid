import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.enlocj-pa {
  d: path("M12 21.25A9.25 9.25 0 1 0 2.75 12");
}

.f6_zd5bng {
  d: path("M12 7.25V12l3 2m-9 1.5l-2 2l2 2m3.5-4l-2 2l2 2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="enlocj-pa"/><path class="f6_zd5bng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:clock-rewind-sharp"} {...others} />);
}

export default Component;
