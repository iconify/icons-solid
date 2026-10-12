import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fty2m02rz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 11.5h.01m4.99 0h.01");
}

.iz9mwqg6c {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.3 19.43a8.75 8.75 0 1 0-4.23-4.23l-.67 4.35l-.213 1.281L4.4 20.5ZM7.75 8.25L10.5 9.5m5.75-1.25L13.5 9.5");
}

.oiaxhzy4f {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 15.25h4.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="iz9mwqg6c"/><path class="fty2m02rz"/><path class="oiaxhzy4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:angry-react-sharp"} {...others} />);
}

export default Component;
