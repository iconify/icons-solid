import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n71xjbcbt.css';
import '../../css/q/qbmgmeber.css';
import '../../css/k/k0b7xsfel.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n71xjbcbt"/><path clip-rule="evenodd" class="qbmgmeber"/><path class="k0b7xsfel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cup-music-filled"} {...others} />);
}

export default Component;
