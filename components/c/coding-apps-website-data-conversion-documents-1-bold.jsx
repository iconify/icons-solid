import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-j2pusqo.css';
import '../../css/x/xyjb4z0fe.css';
import '../../css/y/yrx0xp_ba.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q-j2pusqo"/><path class="xyjb4z0fe"/><path class="yrx0xp_ba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-data-conversion-documents-1-bold"} {...others} />);
}

export default Component;
