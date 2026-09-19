import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iqxfwibxg {
  fill: currentColor;
  d: path("M23 2H1v16h9l-2 3v1h8v-1l-2-3h9zm-2 12H3V4h18z");
}
</style><path class="iqxfwibxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-desktop-mac"} {...others} />);
}

export default Component;
