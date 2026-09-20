import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c8eq9g1pg.css';
import '../../css/e/eon8e1bfw.css';
import '../../css/f/f5pdzmbin.css';
import '../../css/w/wch66iwxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="c8eq9g1pg"/><path class="eon8e1bfw"/><path class="f5pdzmbin"/><path class="wch66iwxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:modern-music-bass-guitar"} {...others} />);
}

export default Component;
