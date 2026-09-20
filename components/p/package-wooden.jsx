import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxh981b4t.css';
import '../../css/z/z-4v-qbfk.css';
import '../../css/x/xw36_bcae.css';
import '../../css/n/nmp0h903g.css';
import '../../css/i/i18yg5b2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lxh981b4t"/><path class="z-4v-qbfk"/><path class="xw36_bcae"/><path class="nmp0h903g"/><path class="i18yg5b2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:package-wooden"} {...others} />);
}

export default Component;
