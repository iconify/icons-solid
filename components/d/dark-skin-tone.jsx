import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.cf5ovs9yz {
  fill: var(--svg-color--584539, #584539);
  d: path("M10 10h108v108H10z");
}
</style><path class="cf5ovs9yz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:dark-skin-tone"} {...others} />);
}

export default Component;
