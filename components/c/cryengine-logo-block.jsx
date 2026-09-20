import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpu-0gzml.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xpu-0gzml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:cryengine-logo-block"} {...others} />);
}

export default Component;
