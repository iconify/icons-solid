import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pehbxlbcw.css';
import '../../css/h/hmo-f6vsn.css';
import '../../css/u/ux36n6oxf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pehbxlbcw"/><path clip-rule="evenodd" class="hmo-f6vsn"/><path class="ux36n6oxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:news-paper-flat"} {...others} />);
}

export default Component;
