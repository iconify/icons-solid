import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/n9peftvhw.css';
import '../../css/n/nieto3bph.css';
import '../../css/u/ufs2t2q3a.css';
import '../../css/g/g5rda80uc.css';
import '../../css/z/z1cxodlmd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="n9peftvhw"/><path class="nieto3bph"/><path class="ufs2t2q3a"/><path class="g5rda80uc"/><path class="z1cxodlmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:recycle-bin"} {...others} />);
}

export default Component;
