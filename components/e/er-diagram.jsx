import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i7basbcgh {
  d: path("M2.5 3H10v6H2.5ZM14 3h7.5v6H14ZM4.5 15h8v6h-8ZM10 6h4m3.75 3v9H12.5");
}

.olhmju4wo {
  d: path("m15.75 9l2 2.75l2-2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i7basbcgh"/><path class="olhmju4wo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:er-diagram"} {...others} />);
}

export default Component;
