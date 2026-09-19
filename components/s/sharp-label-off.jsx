import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.si2s-cc_t {
  fill: currentColor;
  d: path("m22 12l-4.97-7H8.66l10.7 10.73zM2 4l1 1v14h14l2 2l1.41-1.41L3.44 2.62z");
}
</style><path class="si2s-cc_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-label-off"} {...others} />);
}

export default Component;
