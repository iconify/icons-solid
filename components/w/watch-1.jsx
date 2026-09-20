import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v5utkwpev.css';
import '../../css/t/tnv-jyppq.css';
import '../../css/a/aa_8nabpp.css';
import '../../css/k/kevvvebtr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v5utkwpev"/><path class="tnv-jyppq"/><path class="aa_8nabpp"/><path class="kevvvebtr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:watch-1"} {...others} />);
}

export default Component;
