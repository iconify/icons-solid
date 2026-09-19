import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s6wy1zbls {
  fill: currentColor;
  d: path("M22 2H2v20l4-4h16zM5 14l3.5-4.5l2.5 3.01L14.5 8l4.5 6z");
}
</style><path class="s6wy1zbls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-mms"} {...others} />);
}

export default Component;
