import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.c9mt5evfe {
  fill: var(--svg-color--212121, #212121);
  d: path("M23 23h82v82H23z");
}
</style><path class="c9mt5evfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:black-medium-square"} {...others} />);
}

export default Component;
