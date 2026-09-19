import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xep23pbiq {
  fill: currentColor;
  d: path("M5 1v22h14V1zm12 18H7V5h10z");
}
</style><path class="xep23pbiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-smartphone"} {...others} />);
}

export default Component;
