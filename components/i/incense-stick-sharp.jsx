import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k6uyx2mqh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.5 8.25l2.45-.817L16.5 5.5l-1.4-1.867l2.65-.883m1 7.75l1.842-.368L21 8.5M7.5 18.25L14.75 9m-12 9.25h18.5v3H2.75z");
}
</style><path class="k6uyx2mqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:incense-stick-sharp"} {...others} />);
}

export default Component;
