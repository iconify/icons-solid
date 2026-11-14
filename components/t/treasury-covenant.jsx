import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fhgfjmnof {
  d: path("M3.5 2.5h15v4h-15Zm2 4v15h6.7m4.3-9.3V6.5m-8 4h5m-5 3.5h3.7m2.8 1h6v6h-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x216ecbyc {
  d: path("m16.5 18l1 1l2-2");
}
</style><g class="ulnmmdpxh"><path class="fhgfjmnof"/><path class="x216ecbyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:treasury-covenant"} {...others} />);
}

export default Component;
