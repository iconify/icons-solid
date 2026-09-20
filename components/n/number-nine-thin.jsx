import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gf78ynyvm {
  fill: currentColor;
  d: path("M128 44a52 52 0 1 0 24.74 97.73L116.51 206a4 4 0 0 0 7 3.92L173 122a52 52 0 0 0-45-78m0 96a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44");
}
</style><path class="gf78ynyvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-nine-thin"} {...others} />);
}

export default Component;
