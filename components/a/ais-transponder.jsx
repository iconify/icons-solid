import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cknxrpzbc {
  d: path("M6.804 5.5a6 6 0 0 1 10.392 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vf1jinrhy {
  d: path("M2.5 15h19L19 20H5Zm9.5 0V8.5M9.402 7a3 3 0 0 1 5.196 0");
}
</style><g class="ulnmmdpxh"><path class="vf1jinrhy"/><path class="cknxrpzbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ais-transponder"} {...others} />);
}

export default Component;
