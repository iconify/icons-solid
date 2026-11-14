import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k92iu9b3m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 7.5l1.5-3h14l1.5 3M5 20l14-3.5m-14 0L19 20M12 8c1.5 1.5 3 2.5 3 4.25a3 3 0 0 1-6 0C9 10.5 10.5 9.5 12 8Z");
}
</style><path class="k92iu9b3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:campfire-grill"} {...others} />);
}

export default Component;
