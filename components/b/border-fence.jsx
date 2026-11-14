import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pg90z4zhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v19m3.75 0V11l1.5-1.5l1.5 1.5v10.5m2.75 0V11L14 9.5l1.5 1.5v10.5m2.75 0V11l1.5-1.5l1.5 1.5v10.5M3 15h3.75m3 0h2.75m3 0h2.75M3 2.5L10 5L3 7.5Z");
}
</style><path class="pg90z4zhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:border-fence"} {...others} />);
}

export default Component;
