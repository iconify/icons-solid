import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xqr9u7bwd {
  fill: currentColor;
  d: path("M12 3L4 9v12h16V9zm4 13.06L14 15v2H8v-6h6v2l2-1.06z");
}
</style><path class="xqr9u7bwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-camera-indoor"} {...others} />);
}

export default Component;
