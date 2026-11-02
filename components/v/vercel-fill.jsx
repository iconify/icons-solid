import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hwaq4lb1r {
  fill: currentColor;
  d: path("M21.872 18.51A1 1 0 0 1 21 20H3a1 1 0 0 1-.872-1.49l9-16a1.002 1.002 0 0 1 1.744 0Z");
}
</style><path class="hwaq4lb1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:vercel-fill"} {...others} />);
}

export default Component;
