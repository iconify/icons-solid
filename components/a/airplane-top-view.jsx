import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sjju58w6a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m19.571 3.722l-.177 2.298l-3.358 3.359l1.767 6.717l-1.06 1.061l-3.006-5.48l-2.651 2.651v2.122l-.884.884l-1.591-2.652l-2.652-1.591l.884-.884h2.121l2.652-2.652l-5.48-3.005l1.061-1.06l6.717 1.767l3.359-3.358ZM7.5 18q-1.25 2.25-4 3");
}
</style><path class="sjju58w6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:airplane-top-view"} {...others} />);
}

export default Component;
