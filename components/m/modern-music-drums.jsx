import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g5w98gosp.css';
import '../../css/n/nxptrubgu.css';
import '../../css/q/qiio-gb5b.css';
import '../../css/m/m67h1vb2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g5w98gosp"/><path class="nxptrubgu"/><path class="qiio-gb5b"/><path class="m67h1vb2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:modern-music-drums"} {...others} />);
}

export default Component;
