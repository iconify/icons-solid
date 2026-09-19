import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nxw-yv7wb.css';
import '../../css/u/um4n3qbii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="nxw-yv7wb"/><path class="um4n3qbii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:url"} {...others} />);
}

export default Component;
