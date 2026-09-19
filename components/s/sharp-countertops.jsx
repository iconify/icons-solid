import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gz7yl5bxt {
  fill: currentColor;
  d: path("M18 10V7c0-1.66-1.34-3-3-3s-3 1.34-3 3h2c0-.55.45-1 1-1s1 .45 1 1v3H8c1.1 0 2-.9 2-2V4H4v4c0 1.1.9 2 2 2H2v2h2v8h16v-8h2v-2zm-5 8h-2v-6h2z");
}
</style><path class="gz7yl5bxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-countertops"} {...others} />);
}

export default Component;
