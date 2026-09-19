import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.itkj75bfr {
  fill: currentColor;
  d: path("M17 4h-3V2h-4v2H7v18h10z");
}
</style><path class="itkj75bfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-battery-std"} {...others} />);
}

export default Component;
