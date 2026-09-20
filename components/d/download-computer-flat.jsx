import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vj4ru8bao.css';
import '../../css/y/ym_rscbus.css';
import '../../css/t/tdve8jvut.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vj4ru8bao"/><path clip-rule="evenodd" class="ym_rscbus"/><path class="tdve8jvut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:download-computer-flat"} {...others} />);
}

export default Component;
