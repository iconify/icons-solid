import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bphvhnb4p {
  d: path("m12.75 13.5l3-3l3 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vzjd6hbbu {
  d: path("M2.5 6h19v12h-19Zm3 6h4.25");
}
</style><g class="ulnmmdpxh"><path class="vzjd6hbbu"/><path class="bphvhnb4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dropdown-open"} {...others} />);
}

export default Component;
