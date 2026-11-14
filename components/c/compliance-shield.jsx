import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jo34ko0tj {
  d: path("m8.5 12l2.5 2.5l4.5-4.5");
}

.s5gwwlbbg {
  d: path("M12 2.5c2.5 2 5 2.5 8 2.5v6.5c0 4.5-3.5 8-8 10c-4.5-2-8-5.5-8-10V5c3 0 5.5-.5 8-2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s5gwwlbbg"/><path class="jo34ko0tj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:compliance-shield"} {...others} />);
}

export default Component;
