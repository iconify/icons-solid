import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.skntpqbay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h5m0 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm8 0h6m-7.25-3.5l4.25-3.75M14.25 15.5l4.25 3.75");
}
</style><path class="skntpqbay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:light-scatter"} {...others} />);
}

export default Component;
