import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zenyhg4uf.css';
import '../../css/w/wljgqrbai.css';
import '../../css/s/suoyyrb8y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zenyhg4uf"/><path class="wljgqrbai"/><path class="suoyyrb8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:crop-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
