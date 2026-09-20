import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.mbcy0dnue {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("m64 22.95l31.13 42.47H75.71v39.63H52.48V65.42H32.86z");
}
</style><path class="mbcy0dnue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:up-arrow"} {...others} />);
}

export default Component;
