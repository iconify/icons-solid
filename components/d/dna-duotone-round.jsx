import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mjjqwkipi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 3v2c0 6 12 8 12 14v2M6 5h12M8 9h8m-8 6h8M6 19h12m0-16v2c0 1.56-.81 2.84-2 4m-8 6c-1.19 1.16-2 2.44-2 4v2");
}
</style><path class="mjjqwkipi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:dna-duotone-round"} {...others} />);
}

export default Component;
