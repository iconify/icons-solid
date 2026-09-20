import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.tjktpnt8t {
  fill: var(--svg-color--212121, #212121);
  d: path("M50.04 50.04h27.91v27.92H50.04z");
}
</style><path class="tjktpnt8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:black-small-square"} {...others} />);
}

export default Component;
