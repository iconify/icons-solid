import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vuvi0najb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 11.5a5.75 5.75 0 0 1 11.5 0M4 11.5h17.25L21 12.72l-1.5 7.31l-.25 1.22H4.75l-.25-1.22L3 12.72l-.25-1.22zm-.58 3.25h17.16M4.08 18h15.84");
}
</style><path class="vuvi0najb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:picnic-basket-sharp"} {...others} />);
}

export default Component;
