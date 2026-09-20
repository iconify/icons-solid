import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.nata3ac8n {
  fill: var(--svg-color--9b643c, #9b643c);
  d: path("M10 10h108v108H10z");
}
</style><path class="nata3ac8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:medium-dark-skin-tone"} {...others} />);
}

export default Component;
