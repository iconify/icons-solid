import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bzn7-dlcm.css';
import '../../css/b/b05aznmzt.css';
import '../../css/z/zaa61-bad.css';
import '../../css/p/peafvdb2k.css';
import '../../css/o/ow_q8gbwd.css';
import '../../css/p/pfx6v_myu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bzn7-dlcm"/><path class="b05aznmzt"/><path class="zaa61-bad"/><path class="peafvdb2k"/><path class="ow_q8gbwd"/><path class="pfx6v_myu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:newspaper-fold"} {...others} />);
}

export default Component;
