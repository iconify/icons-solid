import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mwrlhobba {
  d: path("M15.25 11.25L17 9.75v7");
}

.rui-a3b0o {
  d: path("M3 4.75v14.5m5.75-14.5v14.5M3 12h5.75m3-4.75h9.5v12h-9.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rui-a3b0o"/><path class="mwrlhobba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:heading-1-sharp"} {...others} />);
}

export default Component;
