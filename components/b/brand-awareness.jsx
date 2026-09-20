import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kbxm-hbjg {
  fill: currentColor;
  d: path("M16 13v-2h4v2zm1.2 7L14 17.6l1.2-1.6l3.2 2.4zm-2-12L14 6.4L17.2 4l1.2 1.6zM3 15V9h4l5-5v16l-5-5z");
}
</style><path class="kbxm-hbjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:brand-awareness"} {...others} />);
}

export default Component;
