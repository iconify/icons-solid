import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g_oe7b2wk {
  fill: currentColor;
  d: path("M5.5 10.5h2v1h-2zM22 4H2v16h20zM9 13H5.5v2H4V9h5zm3.5 2H11V9h1.5zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20z");
}
</style><path class="g_oe7b2wk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-fiber-pin"} {...others} />);
}

export default Component;
