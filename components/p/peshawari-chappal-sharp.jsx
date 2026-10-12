import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.asa-xtkzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c2.75 0 4.75 2.25 4.75 5.5v13h-9.5v-13c0-3.25 2-5.5 4.75-5.5ZM5.75 7.5l12.5 5m0-5l-12.5 5m0 4h12.5");
}
</style><path class="asa-xtkzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:peshawari-chappal-sharp"} {...others} />);
}

export default Component;
