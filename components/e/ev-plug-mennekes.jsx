import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd46vfgmw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nd46vfgmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:ev-plug-mennekes"} {...others} />);
}

export default Component;
