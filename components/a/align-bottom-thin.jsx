import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.rudwnqbcg {
  fill: currentColor;
  d: path("M220 216a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4m-80-40V80a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12v96a12 12 0 0 1-12 12h-40a12 12 0 0 1-12-12m8 0a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4h-40a4 4 0 0 0-4 4Zm-96 0V40a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12v136a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12m8 0a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4Z");
}
</style><path class="rudwnqbcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:align-bottom-thin"} {...others} />);
}

export default Component;
