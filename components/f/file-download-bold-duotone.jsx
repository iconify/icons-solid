import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgd8bzbml.css';
import '../../css/r/rrc0fzxvj.css';
import '../../css/s/sn15dubbm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kgd8bzbml"/><path class="rrc0fzxvj"/><path class="sn15dubbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-download-bold-duotone"} {...others} />);
}

export default Component;
