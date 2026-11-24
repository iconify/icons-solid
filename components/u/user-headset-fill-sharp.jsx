import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hzwoy84oh {
  fill: currentColor;
  d: path("M19.939 9H21a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2v-4a6 6 0 1 0-12 0v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1.061a8.002 8.002 0 0 1 15.878 0M7.393 8.053a5.001 5.001 0 1 1 9.213 3.896a5.001 5.001 0 0 1-9.213-3.896M20 22H4a1 1 0 0 1-1-1c0-.829.336-1.577.865-2.203c.552-.651 1.272-1.14 2.031-1.52C7.741 16.355 9.953 16 12 16s4.259.355 6.104 1.277c.759.38 1.479.869 2.031 1.52c.529.626.865 1.374.865 2.203a1 1 0 0 1-1 1");
}
</style><path class="hzwoy84oh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:user-headset-fill-sharp"} {...others} />);
}

export default Component;
