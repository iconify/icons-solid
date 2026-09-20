import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.ug9-2zbjl {
  fill: var(--svg-color--bf8f68, #bf8f68);
  d: path("M10 10h108v108H10z");
}
</style><path class="ug9-2zbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:medium-skin-tone"} {...others} />);
}

export default Component;
