import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd4e4juil.css';
import '../../css/w/w453hdcek.css';
import '../../css/x/xsk4cbckr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vd4e4juil"/><path class="w453hdcek"/><path clip-rule="evenodd" class="xsk4cbckr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medical-kit-bold-duotone"} {...others} />);
}

export default Component;
