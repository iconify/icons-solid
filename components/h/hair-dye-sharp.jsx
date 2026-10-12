import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n_h3-0bct {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13 8.25l5.75-5.5m-5.67 6.58l-1.16-1.16l-.42-.42l-.42.42l-1.16 1.16l-.42.42l.42.42l1.16 1.16l.42.42l.42-.42l1.16-1.16l.42-.42zM2.75 14h14.5a7.25 7.25 0 0 1-14.5 0ZM6 17h8");
}
</style><path class="n_h3-0bct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hair-dye-sharp"} {...others} />);
}

export default Component;
