import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.avn5bjbjj {
  fill: currentColor;
  d: path("M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10a2 2 0 0 0 2 2H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72c.56-2.67 2.11-5.33 6-5.87V7l3.61 3.36c.21.2.21.53 0 .73z");
}
</style><path class="avn5bjbjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-screen-share"} {...others} />);
}

export default Component;
