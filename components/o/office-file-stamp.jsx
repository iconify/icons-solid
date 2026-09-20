import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7nh69bwn.css';
import '../../css/s/s7u_vebis.css';
import '../../css/n/nry7rrf9c.css';
import '../../css/v/vymynu48m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w7nh69bwn"/><path class="s7u_vebis"/><path class="nry7rrf9c"/><path class="vymynu48m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:office-file-stamp"} {...others} />);
}

export default Component;
