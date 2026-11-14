import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aytbzxbuj {
  d: path("M7.5 13V7A1.5 1.5 0 0 1 9 5.5h6A1.5 1.5 0 0 1 16.5 7v6Zm0-3.5h9m-7 3.5v1.75m5-1.75v1.75");
}

.tfodaoboa {
  d: path("M3.5 2.5h17v15h-17Zm8.5 15v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tfodaoboa"/><path class="aytbzxbuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bus-lane-sign"} {...others} />);
}

export default Component;
