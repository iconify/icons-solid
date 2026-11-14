import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gb9a1se4g {
  d: path("M3 10h18l-2 10H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v339tjbaf {
  d: path("M5 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm8 3c0-4 2-6.5 6-7c0 4-2 6.5-6 7Zm-4 3v4m6-4v4");
}
</style><g class="ulnmmdpxh"><path class="gb9a1se4g"/><path class="v339tjbaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:basket-produce-full"} {...others} />);
}

export default Component;
