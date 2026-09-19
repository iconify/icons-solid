import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z_pw6tbco {
  fill: currentColor;
  d: path("M23 3H1v18h22zm-2 16h-9v-6h9z");
}
</style><path class="z_pw6tbco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-branding-watermark"} {...others} />);
}

export default Component;
