import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bp75p67iw {
  fill: currentColor;
  d: path("M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z");
}
</style><path class="bp75p67iw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-send"} {...others} />);
}

export default Component;
