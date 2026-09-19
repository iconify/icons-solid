import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wek4bsaxb {
  fill: currentColor;
  d: path("M3 7h2v7H3zm-3 3h2v7H0zm22-3h2v7h-2zm-3 3h2v7h-2zm-1-8H6v20h12zm-2 15H8V7h8z");
}
</style><path class="wek4bsaxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-edgesensor-high"} {...others} />);
}

export default Component;
