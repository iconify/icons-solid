import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.it8s0_guq {
  fill: currentColor;
  d: path("M1 19h22V5H1zM19 7v10H5V7z");
}
</style><path class="it8s0_guq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-stay-current-landscape"} {...others} />);
}

export default Component;
