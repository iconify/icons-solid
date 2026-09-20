import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.ce44osb2z {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("m22.95 64l42.46-31.14v19.42h39.64v23.23H65.41v19.61z");
}
</style><path class="ce44osb2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:left-arrow"} {...others} />);
}

export default Component;
