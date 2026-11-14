import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k2o8nu0wk {
  d: path("M2.5 4H12v4.5H2.5ZM12 15.5h9.5V20H12Zm0-9.25h3.5v9.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zcfv3tb9a {
  d: path("m13.75 13.75l1.75 1.75l1.75-1.75");
}
</style><g class="ulnmmdpxh"><path class="k2o8nu0wk"/><path class="zcfv3tb9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:finish-to-start"} {...others} />);
}

export default Component;
