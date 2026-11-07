import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni1kys5ku.css';
import '../../css/n/n-diywgxs.css';
import '../../css/d/dxbekopeu.css';
import '../../css/t/tslk0db_u.css';
import '../../css/m/mg04wxhnt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ni1kys5ku"/><path class="n-diywgxs"/><path class="dxbekopeu"/><path class="tslk0db_u"/><path class="mg04wxhnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:container-bold-duotone"} {...others} />);
}

export default Component;
