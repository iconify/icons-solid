import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o0i0vobkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 4.75h7.5l.21 1.48l.58 4.04l.21 1.48h-11l.21-1.48l.58-4.04l.21-1.48zm-1.9 4.5h9.8m-9.9 5h11.25l.52 1.13l1.96 4.24l.52 1.13H2.75l.52-1.13l1.96-4.24l.52-1.13zM5 17.5h14");
}
</style><path class="o0i0vobkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bucket-hat-sharp"} {...others} />);
}

export default Component;
