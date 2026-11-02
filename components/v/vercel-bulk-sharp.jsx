import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u_v0l4fit {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m12.872 2.51l9 16A1 1 0 0 1 21 20H3a1 1 0 0 1-.872-1.49l9-16a1.002 1.002 0 0 1 1.744 0");
}
</style><path class="u_v0l4fit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:vercel-bulk-sharp"} {...others} />);
}

export default Component;
