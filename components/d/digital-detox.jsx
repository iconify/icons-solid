import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d2_2ecc1k {
  d: path("M9.75 10.25a3.5 3.5 0 1 0 4.5 0M12 8v4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zlv9ls-hz {
  d: path("M5.5 2.5h13v19h-13Zm5 2.75h3");
}
</style><g class="ulnmmdpxh"><path class="zlv9ls-hz"/><path class="d2_2ecc1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:digital-detox"} {...others} />);
}

export default Component;
