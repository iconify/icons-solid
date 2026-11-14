import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x323-mz2z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 21.5l4.5-13l4.5 13M12 3v5.5M8.75 4.25a4 4 0 0 0 0 4.5M6.25 2.5a7 7 0 0 0 0 8m9-6.25a4 4 0 0 1 0 4.5m2.5-6.25a7 7 0 0 1 0 8");
}
</style><path class="x323-mz2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:public-broadcast-tower"} {...others} />);
}

export default Component;
