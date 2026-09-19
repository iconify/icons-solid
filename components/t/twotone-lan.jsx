import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fhk8qsb4u {
  fill: currentColor;
  d: path("M10 7V4h4v3zM9 17v3H5v-3zm10 0v3h-4v-3z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.n2yt9ebjh {
  fill: currentColor;
  d: path("M13 22h8v-7h-3v-4h-5V9h3V2H8v7h3v2H6v4H3v7h8v-7H8v-2h8v2h-3zM10 7V4h4v3zM9 17v3H5v-3zm10 0v3h-4v-3z");
}
</style><path class="fhk8qsb4u"/><path class="n2yt9ebjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-lan"} {...others} />);
}

export default Component;
