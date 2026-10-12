import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z5bgvya6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9 12l10.75-8.75c1-.8 1.9.1 1.25 1.1C18.5 9 15.5 12.75 12 15Zm-.74 2.76l.48.48l.64.64l-.64.64l-2.97 2.97l-.64.64l-.64-.64l-.48-.48l-.64-.64l.64-.64l2.97-2.97l.64-.64z");
}
</style><path class="z5bgvya6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chef-knife-sharp"} {...others} />);
}

export default Component;
