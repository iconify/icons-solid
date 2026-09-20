import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cpkbtwj8p {
  fill: currentColor;
  d: path("M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152Zm-76-16a40 40 0 0 0 5.06-79.67l13.24-22.18a12 12 0 1 0-20.6-12.3l-32.24 54A40 40 0 0 0 128 188m0-56a16 16 0 1 1-16 16a16 16 0 0 1 16-16");
}
</style><path class="cpkbtwj8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-square-six-bold"} {...others} />);
}

export default Component;
