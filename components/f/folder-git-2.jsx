import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r5qicdcsm.css';
import '../../css/w/wjl-5kbwl.css';
import '../../css/x/xyon_4mfc.css';
import '../../css/n/ny1qr-80o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r5qicdcsm"/><path class="wjl-5kbwl"/><circle class="xyon_4mfc"/><circle class="ny1qr-80o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:folder-git-2"} {...others} />);
}

export default Component;
