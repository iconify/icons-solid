import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cst0x0bcx {
  fill: currentColor;
  d: path("M16 1H2v16h2V3h12zm-1 4l6 6v12H6V5zm-1 7h5.5L14 6.5z");
}
</style><path class="cst0x0bcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-file-copy"} {...others} />);
}

export default Component;
