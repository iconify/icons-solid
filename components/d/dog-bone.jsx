import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bqbby_bhl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 10.25H7A2.25 2.25 0 1 0 4.5 12A2.25 2.25 0 1 0 7 13.75h5m0-3.5h5A2.25 2.25 0 1 1 19.5 12a2.25 2.25 0 1 1-2.5 1.75h-5");
}
</style><path class="bqbby_bhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dog-bone"} {...others} />);
}

export default Component;
