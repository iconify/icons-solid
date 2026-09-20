import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tu5ioprzj {
  fill: currentColor;
  d: path("M4 20V4h16v16zM5 8h14V5H5zm14 1H5v10h14zM5 8v1zm0 0V5zm0 1v10z");
}
</style><path class="tu5ioprzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:toolbar-outline-sharp"} {...others} />);
}

export default Component;
