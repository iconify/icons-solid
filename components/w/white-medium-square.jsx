import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.sdd03o8jg {
  fill: var(--svg-color--e0e0e0, #e0e0e0);
  d: path("M23 23h82v82H23z");
}
</style><path class="sdd03o8jg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:white-medium-square"} {...others} />);
}

export default Component;
