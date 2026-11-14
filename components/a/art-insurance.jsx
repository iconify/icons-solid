import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m5_p7dbbg {
  d: path("M7.75 18.75L11 15l2.5 2.75l1.25-1.25l1.5 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yhjw8svuc {
  d: path("M3 9.25a9 6.75 0 0 1 18 0a3.5 3.5 0 0 0-6 0a3.5 3.5 0 0 0-6 0a3.5 3.5 0 0 0-6 0ZM5 12h14v9.5H5Z");
}
</style><g class="ulnmmdpxh"><path class="yhjw8svuc"/><path class="m5_p7dbbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:art-insurance"} {...others} />);
}

export default Component;
