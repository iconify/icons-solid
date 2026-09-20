import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xmb3dqb6v {
  fill: currentColor;
  d: path("M10 17h9v-6h-9zm-8 3V4h20v16z");
}
</style><path class="xmb3dqb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:branding-watermark-sharp"} {...others} />);
}

export default Component;
