import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f57gb6bny {
  fill: currentColor;
  d: path("M15.5 10.5h2v1h-2z");
}

.i744c0dwj {
  fill: currentColor;
  d: path("M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-10 6.5H6.5v.75H10V15H5v-1.5h3.5v-.75H5V9h5zm3 4.5h-2V9h2zm6-6v4h-3.5v2H14V9z");
}
</style><path class="f57gb6bny"/><path class="i744c0dwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-sip"} {...others} />);
}

export default Component;
