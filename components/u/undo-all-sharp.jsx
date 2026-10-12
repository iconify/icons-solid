import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.al_83wzwo {
  d: path("m8.25 5.25l-4 4l4 4");
}

.cxnifx17f {
  d: path("M4.25 9.25h10a5.5 5.5 0 0 1 0 11H10");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="cxnifx17f"/><path class="al_83wzwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:undo-all-sharp"} {...others} />);
}

export default Component;
