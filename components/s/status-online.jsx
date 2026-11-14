import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pha4gg2xa {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.25 12q0 3.21 2.27 5.48T12 19.75t5.48-2.27T19.75 12t-2.27-5.48T12 4.25T6.52 6.52T4.25 12");
}
</style><path class="pha4gg2xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:status-online"} {...others} />);
}

export default Component;
