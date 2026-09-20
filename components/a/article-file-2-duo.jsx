import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dukzfrx0n.css';
import '../../css/i/i6sl99bcm.css';
import '../../css/o/onxs-abuq.css';
import '../../css/z/z-cavorqj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="dukzfrx0n"/><path class="i6sl99bcm"/><path class="onxs-abuq"/><path class="z-cavorqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:article-file-2-duo"} {...others} />);
}

export default Component;
