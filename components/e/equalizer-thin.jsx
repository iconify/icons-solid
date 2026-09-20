import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.bhlh2ccpv {
  fill: currentColor;
  d: path("M76 96a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m-4 28H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m80-64h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m80-96h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m-48-24h48a4 4 0 0 0 0-8h-48a4 4 0 0 0 0 8m48 56h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8");
}
</style><path class="bhlh2ccpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:equalizer-thin"} {...others} />);
}

export default Component;
