import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a1teogboe {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m-4 11.25h6.5M15 20h6.5m-4-5.75v3M20 18.5v3");
}

.o2csh_b0k {
  d: path("M3.5 3v17.5h8.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o2csh_b0k"/><path class="a1teogboe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:forecast-adjust"} {...others} />);
}

export default Component;
