import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oqyoifqnt {
  d: path("M7.5 9a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm-3 12.5c0-3.5 3.25-5.25 7.5-5.25s7.5 1.75 7.5 5.25");
}

.tpy_pac9m {
  d: path("M7.5 9q3.5 0 7-3.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oqyoifqnt"/><path class="tpy_pac9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:person-short-hair"} {...others} />);
}

export default Component;
