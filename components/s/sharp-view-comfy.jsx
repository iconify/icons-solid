import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gii-66bpc {
  fill: currentColor;
  d: path("M2 4v7h20V4zm8 16h12v-7H10zm-8 0h6v-7H2z");
}
</style><path class="gii-66bpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-view-comfy"} {...others} />);
}

export default Component;
