import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iyq_t8qvi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.25 7.25a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0ZM2.5 21.5c.5-6.5 3-10.25 7-12m6-3.5h.01");
}
</style><path class="iyq_t8qvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:golf-ball-flight"} {...others} />);
}

export default Component;
