import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/be77uiblp.css';
import '../../css/n/nwx-alnvf.css';
import '../../css/z/zes_-bvuu.css';
import '../../css/d/dgmop3brn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="be77uiblp"/><path class="nwx-alnvf"/><path class="zes_-bvuu"/><path class="dgmop3brn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:kaleidescape"} {...others} />);
}

export default Component;
