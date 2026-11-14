import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f6btmdbfz {
  d: path("M7.5 6.5h13v12h-13Z");
}

.flvhztbfg {
  d: path("M10.25 10h5v3.25a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5Zm5 1H16a1.75 1.75 0 0 1 0 3.5h-.75");
}

.oxbyo_dfc {
  d: path("M4.5 21.5V3H19m-9 0v3.5M18 3v3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oxbyo_dfc"/><path class="f6btmdbfz"/><path class="flvhztbfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:coffee-break-sign"} {...others} />);
}

export default Component;
