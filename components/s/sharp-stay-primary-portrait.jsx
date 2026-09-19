import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bi7egzbxv {
  fill: currentColor;
  d: path("M5.01 1v22H19V1zM17 19H7V5h10z");
}
</style><path class="bi7egzbxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-stay-primary-portrait"} {...others} />);
}

export default Component;
